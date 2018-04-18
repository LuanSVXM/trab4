const cursos = document.getElementById('add.cursos');
const select = document.getElementsByTagName('select');
const div = document.getElementsByTagName('escolhas');
let val = 0;
const arr = [];
const a = -1;
const verificar = 0;
const i = -1;
function adicionar() {
    // for(let i = 0; i < arr.length; i++) {
    document.querySelector('select').innerHTML += `<option>${cursos.value}</option>`;
    // arr += `<option>${cursos.value}</option>`;
}

function selecionar() {
    document.getElementById('escolhas').innerHTML += `<div id="${val++}"> <label>${select[0].value}</label> <button onclick="${remover()}">remover</button> <button onclick="${subir()}">subir</button> <button onclick="${descer()}">descer</button></div>`;
}
// for(let i = 0; i < select[])
// document.getElementById('escolhas').innerHTML += `<div id="${val++}">${select[0].value}</div> <button onclick="${remover()}">remover</button> <button onclick="${subir()}">subir</button> <button onclick="${descer()}">descer</button>`;


function remover() {

}

function subir() {

}

function descer() {

}

