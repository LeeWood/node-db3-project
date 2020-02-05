const db = require('../data/db-config.js');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
  .where({ id });
}

function findSteps(id) {
{/*
SELECT schemes.scheme_name, steps.instructions
FROM steps
JOIN schemes
ON steps.scheme_id = schemes.id; 
*/}

  return db('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where({ scheme_id: id })
    .orderBy('steps.step_number');
}

function add(scheme) {
  return db('schemes')
    .insert(scheme);
}

// async function add(scheme) {
//   return new Promise((resolve, reject) => {

//     const result = await db('schemes').insert(scheme);
//     if(result) {
//       resolve({ schemes: "scheme_name", ...result});
//     }else {
//       reject(null);
//     }
//   });
// }

//! This is still throwing an "await is only valid in async function" error although the async identifyer is present at the beginning of the function...look more into the syntax and find the bug.

function update(changes, id) {  
  return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .delete();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}


