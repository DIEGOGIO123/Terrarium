// Usando la funcion dragElement
//para darle propiedades de arrastre
// a las plantas
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

//Creando la funcion dragElement
function dragElement(terrariumElement){
    // Creando unas variables de posicion
    let despX = 0, despY = 0, initPosX = 0, initPosY = 0;
    //funcion element drag
    function elementDrag(e){
        //se calcula el desplazamiento
        despX  = e.clientX - initPosX;
        despY  = e.clientY - initPosY;
        //Asignando nueva posicion inicial
        initPosX = e.clientX;
        initPosY = e.clientY; 
        //SE LE APLICA EL DESPLAZAMIENTO A LA PLANTA
        terrariumElement.style.left = `${terrariumElement.offsetLeft + despX}px`;
        terrariumElement.style.top = `${terrariumElement.offsetTop + despY}px`;
}
//parando la funcionalidad dde arrastre
function stopElementDrag(){
    document.onpointerup = null;
    document.onpointermove = null;
}
    // pointerDrag
    function pointerDrag(event){
        // previene el funcionamiento por defecto
        event.preventDefault();
        initPosX = event.clientX;
        initPosY = event.clientY;
       // console.log(`initPosX> ${initPosX}`);
       // console.log(`initPosY> ${initPosY}`);
        //REALIZANDO FUNCION DE ARRASTRE
        document.onpointermove = elementDrag;
        //funcion que se ejecuta cuando 
        //el usuario suelta el boton
        document.onpointerup = stopElementDrag; 
    }
    // Detectando el evento de sujetar
    terrariumElement.onpointerdown = pointerDrag;
}