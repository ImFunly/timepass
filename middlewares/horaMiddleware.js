const horaMiddleware = (req, res, next) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  req.horaActual = formattedTime;
  req.hora = hours;
  next();
};

module.exports = horaMiddleware;
