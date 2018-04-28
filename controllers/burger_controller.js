var express = require("express");

var router = express.Router();

//Import the burgers.js model for it's database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne("burger_name", req.body.name, function(result) {
    // Send back the ID of the new quote
    console.log(result.insertId);
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;

//3. Inside the `burgers_controller.js` file, import the following:

//* Express * `burger.js`

//4. Create the `router` for the app, and export the `router` at the end of your file.
