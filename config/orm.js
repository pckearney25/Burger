//Imports the MySQL connection
var connection = require("./connection.js");

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    console.log(ob);
    console.log(key);
    console.log(value);

    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//Object for the SQL statement functions.
var orm = {
  selectAll: function(tableInput, modCBF) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("data selected from the db.");
      modCBF(result);
    });
  },
  //As written, insertOne() will work for varchar inputs only.
  insertOne: function(table, col, val, modCBF) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += col;
    queryString += ") ";
    queryString += 'VALUES ("';
    queryString += val;
    queryString += '"); ';

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      modCBF(result);
    });
  },

  updateOne: function(table, objColVals, condition, modCBF) {
    console.log(objToSql(objColVals));

    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      modCBF(result);
    });
  }
};

module.exports = orm;
