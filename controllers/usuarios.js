const { response } = require('express')

const usuariosGet = (req, res = response) => {

  const { q, nombre = 'No name', apikey } = req.query

  res.json({
    msg: "get API - controlador",
    q, 
    nombre, 
    apikey
  })
}

const usuariosPost = (req, res) => {

  const { nombre, edad } = req.body

  res.status(201).json({
    msg: "post API",
    nombre, 
    edad
  })
}

const usuariosPut = (req, res) => {

  const id = req.params.id

  res.status(201).json({
    msg: "put API",
    id
  })
}

const usuariosPatch = (req, res) => {
  res.json({
    msg: "patch API"
  })
}

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API"
  })
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}