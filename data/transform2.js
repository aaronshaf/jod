const fs = require("fs");

const knex = require("knex")({
  client: "mysql",
  version: "7.2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "pwd",
    database: "jod"
  }
});

knex("discourses")
  // .where({ email: 'hi@example.com' })
  .then(rows => {
    fs.writeFileSync(
      "tmp.json",
      JSON.stringify(
        rows.map(discourse => {
          console.log(discourse.volume, discourse.start_page);
          return {
            ...discourse,
            volume: parseInt(discourse.volume, 10),
            start_page: parseInt(discourse.start_page, 10),
            end_page: parseInt(discourse.end_page, 10),
            total_words: undefined
          };
        }),
        null,
        2
      )
    );
  });
