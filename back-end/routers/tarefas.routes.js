const express = require('express');
const router = express.Router();

const tarefas = [
  {

  },
]

router.get('/', (req, res) => {
  res.send(tarefas);
})


router.get('/:id', (req, res) => {
  const idParam = req.params.id;
  const index = tarefas.findIndex(tarefa => tarefa.id == idParam);
  const tarefa = tarefas[index];
  res.send(tarefa);
})


router.put('/:id', (req, res) => {
  const tarefaEdit = req.body;
  const id = req.params.id;
  let tarefaPreCadastrada = tarefa.find((tarefa) => tarefa.id == id);

  tarefaPreCadastrada.titulo = tarefaEdit.titulo;
  tarefaPreCadastrada.descricao = tarefaEdit.descricao;
  tarefaPreCadastrada.prioridade = tarefaEdit.prioridade;
  tarefaPreCadastrada.status = tarefaEdit.status;
  tarefaPreCadastrada.status = tarefaEdit.Date;

  res.send({
    message: `tarefa ${tarefaPreCadastrada.id} atualizada com sucesso`,
  })
})




router.post('/add', (req, res) => {
  const tarefa = req.body;
  tarefa.id = Date.now();
  tarefa.push(tarefa);
  res.status(201).send({
    message: 'tarefa cadastrada com sucesso',
  });
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = tarefas.findIndex((tarefa) => tarefa.id == id);
  tarefas.splice(index, 1);

  res.send({
    message: `tarefa excluida com sucesso`,
  })
})

module.exports = router;