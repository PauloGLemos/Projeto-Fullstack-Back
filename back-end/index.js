
const express = require('express');
const mongoose = require('mongoose');
const Tarefa = require('./models/tarefa');

const app = express();
app.use(express.json());

const Conn = require('./conn/conn');
Conn();

//  const tarefaAdd = new Tarefa({
//    titulo: "teste",
//    descricao: "teste",
//    prioridade: "alta",
//    status: "fazendo",
//    dataTarefa: "12/10"
//  })

//  tarefaAdd.save()
//  .then(() => console.log('tarefa salva'))
//  .catch((err) => console.log(err));

app.get('/tarefas', async (req, res) => {
  const tarefas = await Tarefa.find();
  console.log(tarefas);
  res.send(tarefas);
  })

app.get('/tarefas/findById/:id', async (req, res) => {
  const tarefasById = await Tarefa.findOne({_id: req.params.id });
  res.send(tarefasById);
  })

app.delete('/tarefas/delete/:id', async(req, res) => {
  await Tarefa.deleteOne({ _id: req.params.id });
  res.status(200).send({
    message: 'Tarefa Excluida',
  })
})

app.post('/tarefas/add', async(req, res) => {
  await Tarefa.create(req.body)
  .then(() => {
    res.status(201).send({
      message: 'Tarefa Criada'
    })
  })
  .catch((err) => {
    res.status(400).send({
      error: 'Algo deu Errado'
    })
    console.log(err);
  })
})

const port = 3001;
app.listen(port, () => {
  console.log('porta 3001 rodando')
})