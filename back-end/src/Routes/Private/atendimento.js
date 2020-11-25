const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/atendimento");

const autorizacaoMid = require("../../middlewares/autorizacao");

// routes.use(autorizacaoMid);

routes.post("/atendimento", controller.criar);

module.exports = routes;