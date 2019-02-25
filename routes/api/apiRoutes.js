const router = require("express").Router();
const db = require("../../db/connection");

router.get("/", function (req, res) {
  // query database for all notes and send back as json
  db.query("SELECT * FROM notes", function (err, results) {
    if (err) throw err;

    res.json(results);
  });
});

router.post("/", function (req, res) {
  // INSERT into database the data coming from req.body
  db.query("INSERT INTO notes SET ?", [ req.body ], function (err, results) {
    if(err) throw err;
    res.json(results);
  })
})

router.post("/:id", function (req, res) {
  // UPDATE database setting req.body WHERE id = req.params.id
  console.log("id: ", req.params.id);
  console.log("body: ", req.body);
  db.query("UPDATE notes SET ? WHERE id = ?", [ req.body, req.params.id ], function (err, results) {
    if(err) throw err;
    res.json(results);
  })
  
});

router.delete("/:id", function (req, res) {
  // DELETE from database where id = req.params.id
  db.query("DELETE FROM notes WHERE id = ?", [ req.params.id ], function (err, results) {
    if(err) throw err;
    res.json(results);
  })
});

module.exports = router;