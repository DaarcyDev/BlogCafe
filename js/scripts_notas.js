//seleccionar contenido

//querySelector
 const heading = document.querySelector('.header__texto h2');//retorna 0 o 1 elemento
 heading.textContent='Nuevo Heading';

 console.log(heading); 


//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');//retorna todos los selectores que se llaman
console.log(enlaces[0]);
// enlaces[0].textContent='nuevo texto para enlaces';
// enlaces[0].href='https://google.com';
// enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlaces');


//getElementById

// const heading2 = document.getElementById('heading');
// console.log(heading2);

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agreagra en href
nuevoEnlace.href='nuevo-enlace.html';
//agregar el texto 
nuevoEnlace.textContent='Un Nuevo Enlace';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregarlo al documento
const navegacion= document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace)



//Eventos

console.log(1);

window.addEventListener('load', function(){//espera a que el js y los archivos que dependen del HTML esten listos
    console.log(2);
});


window.addEventListener('load', imprimir);


window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded',function(){//solo espera a que se descargue todo el HTML, pero no espera el CSS o imagenes
    console.log(4);
})


console.log(5);

function imprimir(){
    console.log(2);
}


window.onscroll = function(){
    console.log("scrolling...");
}


//seleccionar elementos y asociarles un evento

 const btnEnviar =  document.querySelector('.boton--primario');

 btnEnviar.addEventListener('click',function(evento){
     //el evento de click se puede utilizar en imagenes, textos o cualquier elemento
     console.log(evento);
     evento.preventDefault();//sirve para evitar que se recargue la pagina, se utiliza para validar formularios
     //se utiliza pra validar formularios
     console.log('enviando pepdido...')
 });

//validar un formulario
const formulario= document.querySelector('.formulario');
//en los formulario siempre debe haber un intuput submit o un boton type submit

//para validar un formualrio se utiliza un submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('enviando formulario');
});



//Eventos de los inputs o txtArea

const datos={
    nombre:"",
    email:"",
    mensaje:""
}
// las variables de datos sienen que ser con el mismo nombre con el que se regsitraron en el id
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// nombreInput.addEventListener('input',function(event){// de esta forma podemos ver los que escribe 

//     console.log(event.target.value);
// })
// emailInput.addEventListener('input',function(event){

//     console.log(event.target.value);
// })
// mensajeTextA.addEventListener('input',function(event){

//     console.log(event.target.value);
// })
nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)

function leerTexto(event){
    // console.log(event.target.value);
    datos[event.target.id]=event.target.value;
    //onsole.log(event.target)
    console.log(datos);
}


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
    //Enviar el formulario
    console.log('Enviando Formulario');
    
});

function leerTexto(event){
    // console.log(event.target.value);
    datos[event.target.id]=event.target.value;
    //onsole.log(event.target)
    console.log(datos);
}

function mostrarError(mensaje){
    // const error = document.createElement('p');
    // error.textContent=mensaje;
    // error.classList.add('color-alerta');
    // formulario.appendChild(error)

    // //que desaparezca depsues de 5seg
    //  setTimeout(() => {
    //      error.remove();
    //  }, 4000);

}
function mostrarEnvio(mensaje){
    // const envio = document.createElement('p');
    // envio.textContent=mensaje;
    // envio.classList.add('color-alerta');
    // formulario.appendChild(envio)

    // //que desaparezca depsues de 5seg
    //  setTimeout(() => {
    //      envio.remove();
    //  }, 4000);

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
}