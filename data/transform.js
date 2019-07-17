const fs = require("fs")

const discourses = require("./jod.js").discourses

fs.writeFileSync(
  "tmp.json",
  JSON.stringify(
    discourses.map(discourse => {
      return {
        ...discourse,
        volume: parseInt(discourse.volume, 10),
        start_page: parseInt(discourse.start_page, 10),
        end_page: parseInt(discourse.end_page, 10),
        total_words: undefined,
      }
    }),
    null,
    2
  )
)
