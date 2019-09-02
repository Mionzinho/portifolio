const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const bodyParser = require("body-parser")
// const cors = require('cors')({origin: true})

admin.initializeApp(functions.config().firebase)

const db = admin.firestore()
const app = express()
const main = express()

main.use('/api', app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))

exports.webApi = functions.https.onRequest(main)

app.post("/form", (req, res) => {
  // cors(req, res, () => {
    db.collection("contato")
      .add(req.body)
      .then((ref) => {
        // SUCESSO NA GRAVAÇÃO
        res.status(200).send({
          id: ref.id
        })
      })
  // })
})

app.get("/pegar-info", (req, res) => {
  // cors(req, res, () => {
    db.collection("contato")
      .get()
      .then((snapshot) => {
        let retorno = {
          contatos: []
        }
  
        snapshot.forEach(item => {
          retorno.contatos.push(item.data())
        })
  
        res.status(200).send(retorno)
      })
  // })  
})