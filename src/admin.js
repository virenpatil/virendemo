var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    var output = {
        "module": "Admin Module",
        "city": "Mumbai"
    };
    res.json(output);
});



module.exports = router;