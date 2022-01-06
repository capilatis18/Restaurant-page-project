import { baseDatosTareas } from './index.js';

export default function personal(){

    const divP = document.createElement('div');
    divP.classList.add('divPrincipal');

    const h1 = document.createElement('h1');
    h1.textContent = 'Personal';
    divP.appendChild(h1);

    baseDatosTareas.forEach( tareitas => {

        if (tareitas.categoria == 'Personal') {

        const divEvento = document.createElement('div');
        divEvento.classList.add('eventos');
    
        const pp = document.createElement('p');
        pp.innerText = tareitas.tarea;
        divEvento.appendChild(pp);
    
        const divChequeo = document.createElement('div');
        divChequeo.classList.add('tipoChequeo');
        divEvento.appendChild(divChequeo);
    
        const ps = document.createElement('p');
        ps.innerText = tareitas.categoria;
        divChequeo.appendChild(ps);
        
        const input = document.createElement('input');
        input.type = ('checkbox');
        divChequeo.appendChild(input);
    
        divP.appendChild(divEvento);
    }})
        main.appendChild(divP);
}