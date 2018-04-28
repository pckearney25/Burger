var orm = require("../config/orm.js");

var burger = {
  selectAll: function(contCBF) {
    orm.selectAll("burgers", function(res) {
      contCBF(res);
    });
  },
  insertOne: function(col, val, contCBF) {
    orm.insertOne("burgers", col, val, function(res) {
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
