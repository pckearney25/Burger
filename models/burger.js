var orm = require("../config/orm.js");

var burger = {
  selectAll: function(contCBF) {
    orm.selectAll("burgers", function(res) {
      console.log("Back and out through the model.");
      contCBF(res);
    });
  },
  insertOne: function(col, val, contCBF) {
    orm.insertOne("burgers", col, val, function(res) {
      console.log("Back and out through the model.");
      contCBF(res);
    });
  },
  updateOne: function(objColVals, condition, contCBF) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      contCBF(res);
    });
  }
};

module.exports = burger;

//* Also inside `burger.js`, create the code that will call the ORM functions using burger
//specific input for the ORM.

//* Export functions at the end of the `burger.js` file.
