const fs = require("fs")

const VOLUME_COUNT = 26

const volumeNumbers = Array.apply(null, { length: VOLUME_COUNT })
  .map(Number.call, Number)
  .map(x => x + 1)

const allDiscourses = JSON.parse(
  fs.readFileSync(require.resolve("./data/jod.json"))
)

const discourseSets = volumeNumbers.map(volumeNumber => {
  return allDiscourses.filter(discourse => discourse.volume === volumeNumber)
})

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/front-page.js"),
    context: { volumeNumbers },
  })

  for (const volumeNumber of volumeNumbers) {
    createPage({
      path: `/${volumeNumber}`,
      component: require.resolve("./src/templates/volume.js"),
      context: {
        volumeNumber,
        discourses: discourseSets[volumeNumber - 1],
      },
    })
  }

  allDiscourses.forEach(discourse => {
    // console.log(`/${discourse.volume}/${discourse.start_page}`)
    createPage({
      path: `/${discourse.volume}/${discourse.start_page}`,
      component: require.resolve("./src/templates/discourse.js"),
      context: { discourse },
    })
  })
}
