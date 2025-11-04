import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UsuarioSchema from "./models/UsuarioSchema.js";

dotenv.config()

const app = express()
const PORT = 3000

// Middleware - uma funcao que trata as informacoes

app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conectado ao MongoDB')
    } catch (error) {
        console.log('Deu erro ao conectar com MongoDB', error)
    }
}

connectDB()


//rota do get para pegar usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const users = await UsuarioSchema.find()
        res.json(users)
        for (const user of users) {
            console.log(user)
        }
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar usuários '});
    }
})

app.listen(PORT, () => console.log('O servidor esta rodando na por 3000'))
