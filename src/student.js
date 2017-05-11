var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    var output = {
        "module": "Student Module",
        "city": "Mumbai"
    };
    res.json(output);
});

router.get("/more", function(req, res) {
    var output = {
        "student": "Next Generation"
    };

    res.json(output);
});


router.post("/", function(req, res) {
    var output = { "method": "post" };
    res.json(output);
});


module.exports = router;