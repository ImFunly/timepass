const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const hora = req.horaActual;
  res.send(
    `
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${hora} </p>
    <a href="/endroute">Validar hora</a>
    `
  );
});

module.exports = router;
