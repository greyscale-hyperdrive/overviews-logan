const dataGen = require('../../../data-generators/generateMockData.js');

const BATCH_SIZE = 10000;
const MAX_ROW_COUNT = 100000;
let overviewInsertionCount = 0;
// let canInsertOverviews = true;

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
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};

const asyncInsert = (knex, currentRows) => {
  return knex.batchInsert('overviews', currentRows, BATCH_SIZE)
    .returning('id')
    .then((ids) => {
      idCount = ids.length;
      overviewInsertionCount += idCount;
      console.log(`INSERTED ${idCount}, progress: ${(overviewInsertionCount/MAX_ROW_COUNT).toFixed(2) * 100}%`)
    })
    .catch((error) => console.log(`ERROR INSERTING: ${error}`));
}

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('overviews').del()
//     .then(() => {
//       const overviewPromises = [];
//       let genFlag = true;

//       while (genFlag) {
//         if (canInsertOverviews) {
//           let currentRows = dataGen.genOverviews();
//           if (currentRows !== null) {
//             overviewPromises.push(asyncInsert(knex, currentRows))
//           }
//           if (currentRows === null) {
//             genFlag = false;
//           }
//         }
//       }

//       return Promise.all(overviewPromises);
//     })
//     .catch(error => console.log(`Error seeding data: ${error}`));
// };

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
