const Base = require('./Base');

class Tables_list extends Base {
  constructor() {
    super();
  }

  insertOne(toInsert) {
    return new Promise((resolve, reject) => {
      this.bdd.query(
        'INSERT INTO tables_list SET ?', toInsert,
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
        'SELECT * FROM tables_list WHERE ?', params,
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
        'SELECT * FROM tables_list',
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
        "UPDATE tables_list SET ? WHERE ?", [toSet, params],
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
        "DELETE FROM tables_list WHERE ?", params,
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

module.exports = new Tables_list();