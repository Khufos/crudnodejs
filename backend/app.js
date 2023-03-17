import express from 'express';
import cors from 'cors';
const app = express()
app.use(
    cors({
        origin: "*",
    })
)

import { getConsultas } from './database.js'


app.get('/', async (req, res) => {
    const notes = await getConsultas()
    res.send(notes)
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Servidor está quebrando alguma cagada tu fez")
})

app.listen(8080, () => {
    console.log('Server está rodando na porta 8080...')
})