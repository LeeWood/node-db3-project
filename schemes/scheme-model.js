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

}

function update(changes, id) {

}

function remove(id) {

}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}


