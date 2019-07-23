const fs = require("fs");
const parseDiscourseContent = require("./parse-discourse.js");

const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

const pruneDiscourse = discourse => ({
  id: discourse.id,
  volume: discourse.volume,
  start_page: discourse.start_page,
  end_page: discourse.end_page,
  date: discourse.date,
  speaker: discourse.speaker,
  title: discourse.title
});

const VOLUME_COUNT = 26;

const volumeNumbers = Array.apply(null, { length: VOLUME_COUNT })
  .map(Number.call, Number)
  .map(x => x + 1);

const allDiscourses = JSON.parse(
  fs.readFileSync(require.resolve("./data/jod.json"))
).slice(0, 50);

const discourseSets = volumeNumbers.map(volumeNumber => {
  return allDiscourses.filter(discourse => discourse.volume === volumeNumber);
});

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/volume.js"),
    context: {
      volumeNumber: 1,
      volumeNumbers,
      discourses: discourseSets[0].map(pruneDiscourse)
    }
  });

  for (const volumeNumber of volumeNumbers) {
    createPage({
      path: `/${volumeNumber}`,
      component: require.resolve("./src/templates/volume.js"),
      context: {
        volumeNumber,
        volumeNumbers,
        discourses: discourseSets[volumeNumber - 1].map(pruneDiscourse)
      }
    });
  }

  allDiscourses.forEach(discourse => {
    console.log(`/${discourse.volume}/${discourse.start_page}`);
    createPage({
      path: `/${discourse.volume}/${discourse.start_page}`,
      component: require.resolve("./src/templates/discourse.js"),
      context: {
        volumeNumber: discourse.volume,
        volumeNumbers,
        mug: `speakers/${slugify(discourse.speaker)}.jpg`,
        discourse: {
          ...discourse,
          content: parseDiscourseContent(discourse.content)
        }
      }
    });
  });
};
