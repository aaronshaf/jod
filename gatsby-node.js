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
).slice(0, process.env.NODE_ENV === "development" ? 50 : undefined);

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

  for (let x = 0; x < allDiscourses.length; x++) {
    const discourse = allDiscourses[x];
    console.log(`/${discourse.volume}/${discourse.start_page}`);
    const previousDiscourse = allDiscourses[x - 1]
      ? {
          volume: allDiscourses[x - 1].volume,
          page_header: allDiscourses[x - 1].page_header,
          speaker: allDiscourses[x - 1].speaker,
          start_page: allDiscourses[x - 1].start_page,
          end_page: allDiscourses[x - 1].end_page
        }
      : null;
    const nextDiscourse = allDiscourses[x + 1]
      ? {
          volume: allDiscourses[x + 1].volume,
          page_header: allDiscourses[x + 1].page_header,
          speaker: allDiscourses[x + 1].speaker,
          start_page: allDiscourses[x + 1].start_page,
          end_page: allDiscourses[x + 1].end_page
        }
      : null;
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
        },
        previousDiscourse,
        nextDiscourse
      }
    });

    createPage({
      path: `/${discourse.volume}/${discourse.start_page}/amp/`,
      component: require.resolve("./src/templates/discourse.amp.js"),
      context: {
        volumeNumber: discourse.volume,
        volumeNumbers,
        mug: `speakers/${slugify(discourse.speaker)}.jpg`,
        discourse: {
          ...discourse,
          content: parseDiscourseContent(discourse.content)
        },
        previousDiscourse,
        nextDiscourse
      }
    });
  }
};
