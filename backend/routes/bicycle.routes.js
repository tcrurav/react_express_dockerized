module.exports = app => {
    const bicycles = require("../controllers/bicycle.controller.js");

    var router = require("express").Router();

    // Retrieve all Biccles
    router.get("/", bicycles.findAll);

    app.use('/api/bicycles', router);
};