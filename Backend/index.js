const express = require("express")
const app = express()
const cors = require("cors")
const routes = require('./src/routes/postsRoutes')
const pool = require("./src/config/db")

pool.connect().then(() => {
    console.log('Conexión a la base de datos exitosa');
  })

app.use(cors())
app.use(express.json())

app.use("/", routes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

