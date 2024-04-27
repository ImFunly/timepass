const express = require("express");
const indexRouter = require("./routes/index");
const endrouteRouter = require("./routes/endroute");
const horaMiddleware = require("./middlewares/horaMiddleware");
const validarHora = require("./middlewares/validarHora");

const app = express();

app.use(horaMiddleware);
app.use("/", indexRouter);
app.use("/endroute", validarHora, endrouteRouter);

app.listen(3000, () => {
  console.log("El servidor está en funcionando en el puerto 3000");
});
