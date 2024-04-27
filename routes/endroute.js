const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <h1>Bienvenido a /endroute</h1>
    <p>Son las 12 de la mañana</p>
    `);
});

module.exports = router;
