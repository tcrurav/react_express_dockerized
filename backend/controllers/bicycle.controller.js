const db = require("../models");
const Bicycle = db.bicycle;
const Sequelize = db.Sequelize;
const Op = db.Sequelize.Op;

// Retrieve all Bicycles from the database.
exports.findAll = (req, res) => {
    Bicycle.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving bicycles."
            });
        });
};