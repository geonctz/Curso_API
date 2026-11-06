const express = require("express")
const routes = express.Router()
const db = require("../db")

app.get("/professores", async (req, res) => {
    const [professores] = await db.execute("SELECT * FROM professor")
    return res.json(professores)
})

app.post("/professores" , async (req , res) => {
    const {nome , especialidade} = req.body

    if (!nome || !especialidade) {
        return res.status(400).json({error: "nome e especialidade são obrigatorios"})
    }
    if (nome.lenght < 3){
        return res.status(400).json({error: "nome precisa ter mais de 3 caracteres"})
    }

    const [resultado] = await db.execute(
        "INSERT INTO  professor(nome, especialidade) VALUES (?, ?)",
        [nome, especialidade]
    )

    return res.status(201).json({ id: resultado.insertId, nome, especialidade })
})
