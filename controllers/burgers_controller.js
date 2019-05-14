var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var handlebarObject = {
      SqlReturnedArray: data
    }
    res.render("index", handlebarObject);
  });
});

router.get("/api/burgers", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data)
    res.json(data)
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name", "devoured"], ["'" + req.body.burger_name + "'", req.body.devoured], function (result) {
    res.json(result)
  })
})

router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne("devoured", req.body.devoured, "id", req.params.id, function (result) {
    res.json(result)
  })
})

module.exports = router;