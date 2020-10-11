const mysql = require('mysql');

const connection =  mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : 'S0ccer!2',
    database : 'employeeTracker'
  });

  // Promisified query.
  async function query(strQuery){
    return new Promise((resolve, reject)=>{
      connection.query(strQuery,(_err, res) => {
        resolve(res);
        if(_err){
          reject(_err.sqlMessage);
        }
      })
    } );
  }
module.exports = {connection,query};