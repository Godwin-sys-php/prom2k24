const Base = require('./Base');

class Votes extends Base {
  constructor() {
    super();
  }

  insertOne(toInsert) {
    return new Promise((resolve, reject) => {
      this.bdd.query(
        'INSERT INTO votes SET ?', toInsert,
        (error, results, fields) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  }

  findOne(params) {
    return new Promise((resolve, reject) => {
      this.bdd.query(
        'SELECT * FROM votes WHERE ?', params,
        (error, results, fields) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.bdd.query(
        'SELECT * FROM votes',
        (error, results, fields) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  }
  
  updateOne(toSet, params) {
    return new Promise((resolve, reject) => {
      this.bdd.query(
        "UPDATE votes SET ? WHERE ?", [toSet, params],
        (error, results, fields) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  }

  deleteOne(params) {
    return new Promise((resolve, reject) => {
      this.bdd.query(
        "DELETE FROM votes WHERE ?", params,
        (error, results, fields) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  }

  customQuery(query, params) {
    return new Promise((resolve, reject) => {
      this.bdd.query(
        query, params,
        (error, results, fields) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  }
}

module.exports = new Votes();