const axios = require('axios');

async function makeGetRequest() {

    let payload = {
    "Alumno":"mate2",
    "Tarea":"ejercicio1",
    "Grupo":"120",
    "CalificaNum":"23",
    "Retro":"falta mas texto" };

    let res = await axios.post('http://127.0.0.1:8000/califica', payload);

    let data = res.data;
    console.log(data);
}

makeGetRequest();

