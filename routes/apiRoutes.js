//todo: add error handling to routes?
// 1x3-2x0-3x4-4x2

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // route for submitting quiz question results
  app.post("/api/questions/result", (req, res) => {
    console.log(req.body);
    const jsonResponse = { msgFromServer: "Great job!!!" };
    res.json(jsonResponse);
  });

  //------------------------------------------------
  //db testing routes for our models----------------

  // view all questions
  app.get("/api/newquest", (req, res) => {
    db.Questions.findAll().then(data => {
      res.json(data);
    });
  });

  // get a question where quizId = x
  app.get("/api/quiz/:quizId", (req, res) => {
    db.Questions.findAll({
      where: {
        quizId: req.params.quizId
      }
    }).then(data => {
      res.json(data);
    });
  });

  // create a new question
  app.post("/api/newquest", (req, res) => {
    db.Questions.create(req.body).then(data => {
      res.json(data);
    });
  });

  // display all users
  app.get("/api/newuser", (req, res) => {
    console.log("hit the api/newuser GET route");
    db.Users.findAll().then(data => {
      res.json(data);
    });
  });

  // create a new user
  app.post("/api/newuser", (req, res) => {
    console.log("hit the api/newuser POST route");
    db.Users.create(req.body).then(data => {
      res.json(data);
    });
  });

  //end db testing routes-----------------------------
  //--------------------------------------------------

  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({
      where: { id: req.params.id }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
