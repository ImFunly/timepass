const validarHora = (req, res, next) => {
  const horaActual = req.horaActual;
  const hora = req.hora;

  if (hora < 12 || hora > 24) {
    res.send(
      // LA IMAGEN NO CONSIGO QUE CARGUE
      `
      <img src="../img/error.png" alt="Error"/>
      <h1>Error</h1>
      <p>La hora actual es: ${hora} </p>
      <p>Aun no son las 12 de la mañana</p>
      <a href="/endroute">Validar nuevamente</a>
      `
    );
  } else {
    next();
  }
};

module.exports = validarHora;
