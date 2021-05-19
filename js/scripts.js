
const datos={
    nombre:"",
    email:"",
    mensaje:""
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario= document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //validar el formulario
    const{nombre, email, mensaje}= datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('todos los campos son obligatorios')
        return;
    }else{
        mostrarAlerta('enviado');
        color();
        return;
    } 
});

function leerTexto(event){
    datos[event.target.id]=event.target.value;
    console.log(datos);
}

function color(){
    const color = document.querySelector('.color-alerta');
    color.style.background = 'green';
}

function mostrarAlerta(mensaje){
    const alerta = document.createElement('p')
    alerta.textContent= mensaje;
    alerta.classList.add('color-alerta');
    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove();
    }, 4000);

    const existe = document.getElementById('mensajeAlerta');
    if(existe!=null){
        existe.remove();
    }
    alerta.id='mensajeAlerta';
   
}