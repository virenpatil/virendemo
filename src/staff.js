var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    var output = {
        "module": "Staff Module",
        "city": "Mumbai"
    };
    res.json(output);
});



module.exports = router;