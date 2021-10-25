const mongoose = require('mongoose');

const tarefaModel = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    prioridade: {type: String, required: true},
    status: {type: String, required: true},
    dataTarefa: {type: Date, default: Date.now}

})

const Tarefa = mongoose.model("tarefas", tarefaModel);

module.exports = Tarefa;