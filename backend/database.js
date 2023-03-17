import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE

}).promise()



export async function getConsultas() {
    const [rows] = await pool.query(`SELECT pessoas.id,pessoas.nome, pessoas.email, pessoas.id_cargo, cargo.descricao,cargo.cpf,cargo.id_documentos, documentos.rg
    FROM pessoas
    left  JOIN cargo ON PESSOAS.id_cargo = cargo.id
    left  JOIN documentos ON cargo.id_documentos = documentos.id`)
    return rows

}

export async function delConsultas(id) {
    const [rows] = await pool.query(`SELECT pessoas.id,pessoas.nome, pessoas.email, pessoas.id_cargo, cargo.descricao,cargo.cpf,cargo.id_documentos, documentos.rg
    FROM pessoas
    left  JOIN cargo ON PESSOAS.id_cargo = cargo.id
    left  JOIN documentos ON cargo.id_documentos = documentos.id WHERE pessoas.id = ?`, [id])
    return rows[0]

}


//const testes = await delConsultas(1)
//console.log(testes)
