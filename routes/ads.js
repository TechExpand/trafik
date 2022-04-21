const express = require("express");
const router = express.Router();



router.get("/form", function (req, res, next) {
    res.sendFile('/template/dist/form.html', { root: __dirname });
    // res.sendFile(__dirname + "/template/dist/form.html");
  });


  router.post("/vendor", function (req, res, next) {
    res.sendFile('/template/dist/success.html', { root: __dirname });
    // res.sendFile(__dirname + "/template/dist/form.html");
  });
  
  module.exports = router;