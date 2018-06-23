const dataGen = require('../../../data-generators/generateMockData.js');

const BATCH_SIZE = 1000;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('overviews').del()
    .then(() => {
      const overviewPromises = [];
      let genFlag = true;

      while (genFlag) {
        let currentRows = dataGen.genOverviews();
        if (currentRows !== null) {
          overviewPromises.push(asyncInsert(knex, currentRows))
        }
        if (currentRows === null) {
          genFlag = false;
        }
      }

      return Promise.all(overviewPromises);
    });
};

const asyncInsert = (knex, currentRows) => {
  return knex.batchInsert('overviews', currentRows, BATCH_SIZE)
    .returning('id')
    .then((ids) => console.log(`INSERTED ${ids.length}, lastest: ${ids[ids.length - 1]}`))
    .catch((error) => console.log(`ERROR INSERTING: ${error}`));
}

// const genOverviews = (overviewCount, MAX_ROWS, BATCH_SIZE, genFlag) => {
//   if (overviewCount.current >= MAX_ROWS) {
//     genFlag.continue = false;
//     return;
//   }
//   const rows = [];
//   for (let i = 1; i <= BATCH_SIZE; i++) {
//     overviewCount.current += 1;
//     rows.push(createOverview());
//   }
//   console.log('Overviews')
//   console.log(rows);
//   return rows;
// };
