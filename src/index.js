import './style.css';
import personal from './personal.js';
import principal from './principal.js';
import trabajo from './trabajo.js';

const figura = document.querySelector('#figura');
const Ap = document.querySelector('.p');
const idCategoria = document.querySelector('#categoria');
const idTarea = document.querySelector('#tarea');
const closes = document.querySelector('#close');
const overlay = document.querySelector('#overlay');
const button = document.querySelector('#button');
const main = document.querySelector('#main');
const form = document.querySelector('#form');
const pestanaPersonal = document.querySelector('#personal');
const hoy = document.querySelector('#hoy');
const pestanaTrabajo = document.querySelector('#trabajo');

let nuevaTarea;
function capturar(){
    function Tareas(tarea, categoria){
        this.tarea = tarea
        this.categoria = categoria
    };
    nuevaTarea = new Tareas(idTarea.value, idCategoria.value);
    
}

export let baseDatosTareas = [
    {tarea: 'Cambio de aceite Camioneta', categoria: 'Personal'},
    {tarea: 'Buscar leche de corral', categoria: 'Personal'},
    {tarea: 'Redes sociales', categoria: 'Trabajo'},
];

function agregar(){
    baseDatosTareas.push(nuevaTarea);
    console.log(baseDatosTareas);
};

function addUnPop(){
        overlay.classList.remove('overlayPop');
        overlay.classList.add('overlayUnPop');
        form.reset();
};

function addPop(){
        overlay.classList.remove('overlayUnPop');
        overlay.classList.add('overlayPop');
};

/*function divTarea(){
    const divEvento = document.createElement('div');
    divEvento.classList.add('eventos');

    const pp = document.createElement('p');
    pp.innerText = idTarea.value;
    divEvento.appendChild(pp);

    const divChequeo = document.createElement('div');
    divChequeo.classList.add('tipoChequeo');
    divEvento.appendChild(divChequeo);

    const ps = document.createElement('p');
    ps.innerText = idCategoria.value;
    divChequeo.appendChild(ps);
    
    const input = document.createElement('input');
    input.type = ('checkbox');
    divChequeo.appendChild(input);

    main.appendChild(divEvento);
}*/

button.addEventListener('click', ()=>{
    capturar();
    agregar();
    remove();
    principal();
    addUnPop();
})
closes.addEventListener('click', ()=>{
    addUnPop();
})
figura.addEventListener("click", () =>{
    addPop();
})
Ap.addEventListener("click", () =>{
    addPop();
})


function remove(){
    const divPrincipal = document.querySelector('.divPrincipal');
    main.removeChild(divPrincipal);
}
hoy.addEventListener('click', () =>{
    remove()
    principal()
})

pestanaPersonal.addEventListener('click', () =>{
    remove()
    personal()
})

pestanaTrabajo.addEventListener('click', () =>{
    remove()
    trabajo()
})

principal();