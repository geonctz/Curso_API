const express = require ("express")
const app = express()
const RotasProfessores = require("./routes/professores.routes")
const rotasCursos = require("./routes/cursos.routes")

app.use(express.json())
app.use("/professores", rotasProfessores)
app.use("/cursos", rotasCursos)

app.listen(3000 , () => console.log("API no ar"))
