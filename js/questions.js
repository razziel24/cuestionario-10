var formElement=null;
var textosecreto=null;
var respuestaSelect=null;
var respuestasCheckbox = [];
var nota = 0;  //nota de la prueba sobre 3 puntos (hay 3 preguntas)

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
   if (comprobar()){
    corregirtext();
    corregirSelect();
    corregirCheckbox();
    presentarNota();
   }
   return false;
 }
 
 
 //LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "xml/preguntas.xml", true);
 xhttp.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
 
 //NUMBER
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
 ponerDatosInputHtml(tituloInput);
 textosecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 
 var tituloInput1=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 ponerDatosInputHtml1(tituloInput1);
 textosecreto=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);

var tituloInput8=xmlDoc.getElementsByTagName("title")[8].innerHTML;
 ponerDatosInputHtml2(tituloInput8);
 textosecreto=parseInt(xmlDoc.getElementsByTagName("answer")[8].innerHTML); 
 
 var tituloInput9=xmlDoc.getElementsByTagName("title")[9].innerHTML;
 ponerDatosInputHtml3(tituloInput9);
 textosecreto=parseInt(xmlDoc.getElementsByTagName("answer")[9].innerHTML);

 //SELECT
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var tituloselect=xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("pregunta_003").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_003").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloselect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
 
 var tituloselect1=xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("pregunta_004").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_004").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml1(tituloselect1,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[3].innerHTML);
 
 var tituloselect2=xmlDoc.getElementsByTagName("title")[4].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("pregunta_005").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_005").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml2(tituloselect2,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
 
 var tituloselect3=xmlDoc.getElementsByTagName("title")[5].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("pregunta_006").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_006").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml3(tituloselect3,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[5].innerHTML);
 
 var tituloselect4=xmlDoc.getElementsByTagName("title")[6].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("pregunta_007").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_007").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml4(tituloselect4,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[6].innerHTML);
 
 var tituloselect5=xmlDoc.getElementsByTagName("title")[7].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("pregunta_008").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("pregunta_008").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml5(tituloselect5,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[7].innerHTML);
 
 
 
}

//****************************************************************************************************
//implementación de la corrección

function corregirNumber(){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s=formElement.elements[0].value;     
  if (s==textosecreto) {
   darRespuestaHtml("P1: Exacto!");
   nota +=1;
  }
  else {
    if (s>textosecreto) darRespuestaHtml("te has equivocado");
    
  }
}

function corregirSelect(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[2];  
  if (sel.selectedIndex-1==respuestaSelect) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
   darRespuestaHtml("P2: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P2: Incorrecto");
}


   } 
  }
}

//****************************************************************************************************
// poner los datos recibios en el HTML
function ponerDatosInputHtml(t){
 document.getElementById("tituloInput").innerHTML = t;
}

function ponerDatosInputHtml1(t){
 document.getElementById("tituloInput1").innerHTML = t;
}


function ponerDatosSelectHtml(t,opt){
  document.getElementById("tituloselect").innerHTML=t;
  var select = document.getElementsByTagName("select")[2];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosSelectHtml1(t,opt){
  document.getElementById("tituloselect1").innerHTML=t;
  var select = document.getElementsByTagName("select")[3];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}
 
function ponerDatosSelectHtml2(t,opt){
  document.getElementById("tituloselect2").innerHTML=t;
  var select = document.getElementsByTagName("select")[4];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}
 
 function ponerDatosSelectHtml3(t,opt){
  document.getElementById("tituloselect3").innerHTML=t;
  var select = document.getElementsByTagName("select")[5];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosSelectHtml4(t,opt){
  document.getElementById("tituloselect4").innerHTML=t;
  var select = document.getElementsByTagName("select")[6];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosSelectHtml5(t,opt){
  document.getElementById("tituloselect5").innerHTML=t;
  var select = document.getElementsByTagName("select")[7];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

}

//****************************************************************************************************
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 3");
}

function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}

//Comprobar que se han introducido datos en el formulario
function comprobar(){
   var f=formElement;
   var checked=false;
   for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
      if (f.color[i].checked) checked=true;
   }
   if (f.elements[0].value=="") {
    f.elements[0].focus();
    alert("Escribe un número");
    return false;
   } else if (f.elements[1].selectedIndex==0) {
    f.elements[1].focus();
    alert("Selecciona una opción");
    return false;
   } if (!checked) {    
    document.getElementsByTagName("h3")[2].focus();
    alert("Selecciona una opción del checkbox");
    return false;
   } else  return true;
}