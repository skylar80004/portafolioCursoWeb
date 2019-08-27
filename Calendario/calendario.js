
//Arrays de datos:

meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

lasemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

diassemana=["lun","mar","mie","jue","vie","sab","dom"];

//Tras cargarse la p�gina ...
window.onload = function() {

//fecha actual
hoy=new Date(); //objeto fecha actual
diasemhoy=hoy.getDay(); //dia semana actual
diahoy=hoy.getDate(); //dia mes actual
meshoy=hoy.getMonth(); //mes actual
annohoy=hoy.getFullYear(); //a�o actual

// Elementos del DOM: en cabecera de calendario
tit=document.getElementById("titulos"); //cabecera del calendario
ant=document.getElementById("anterior"); //mes anterior
pos=document.getElementById("posterior"); //mes posterior

// Elementos del DOM en primera fila
f0=document.getElementById("fila0");

//Pie de calendario
pie=document.getElementById("fechaactual");
pie.innerHTML+=lasemana[diasemhoy]+", "+diahoy+" de "+meses[meshoy]+" de "+annohoy;
//formulario: datos iniciales:
document.buscar.buscaanno.value=annohoy;

// Definir elementos iniciales:
mescal = meshoy; //mes principal
annocal = annohoy //a�o principal

//iniciar calendario:
cabecera()
primeralinea()
escribirdias()
}
//FUNCIONES de creaci�n del calendario:
//cabecera del calendario
function cabecera() {
         tit.innerHTML=meses[mescal]+" de "+annocal;
         mesant=mescal-1; //mes anterior
         mespos=mescal+1; //mes posterior
         if (mesant<0) {mesant=11;}
         if (mespos>11) {mespos=0;}
         ant.innerHTML=meses[mesant]
         pos.innerHTML=meses[mespos]
         }
//primera l�nea de tabla: d�as de la semana.
function primeralinea() {
         for (i=0;i<7;i++) {
             celda0=f0.getElementsByTagName("th")[i];
             celda0.innerHTML=diassemana[i]
             }
         }
//rellenar celdas con los d�as
function escribirdias() {
         //Buscar dia de la semana del dia 1 del mes:
         primeromes=new Date(annocal,mescal,"1") //buscar primer d�a del mes
         prsem=primeromes.getDay() //buscar d�a de la semana del d�a 1
         prsem--; //adaptar al calendario espa�ol (empezar por lunes)
         if (prsem==-1) {prsem=6;}
         //buscar fecha para primera celda:
         diaprmes=primeromes.getDate()
         prcelda=diaprmes-prsem; //restar d�as que sobran de la semana
         empezar=primeromes.setDate(prcelda) //empezar= tiempo UNIX 1� celda
         diames=new Date() //convertir en fecha
         diames.setTime(empezar); //diames=fecha primera celda.
         //Recorrer las celdas para escribir el d�a:
         for (i=1;i<7;i++) { //localizar fila
             fila=document.getElementById("fila"+i);
             for (j=0;j<7;j++) {
                 midia=diames.getDate()
                 mimes=diames.getMonth()
                 mianno=diames.getFullYear()
                 celda=fila.getElementsByTagName("td")[j];
                 celda.innerHTML=midia;
                 //Recuperar estado inicial al cambiar de mes:
                 celda.style.backgroundColor="#9bf5ff";
                 celda.style.color="#492736";
                 //domingos en rojo
                 if (j==6) {
                    celda.style.color="#f11445";
                    }
                 //dias restantes del mes en gris
                 if (mimes!=mescal) {
                    celda.style.color="#a0babc";
                    }
                 //destacar la fecha actual
                 if (mimes==meshoy && midia==diahoy && mianno==annohoy ) {
                    celda.style.backgroundColor="#f0b19e";
                    celda.innerHTML="<cite title='Fecha Actual'>"+midia+"</cite>";
                    }
                 //pasar al siguiente d�a
                 midia=midia+1;
                 diames.setDate(midia);
                 }
             }
         }
//Ver mes anterior
function mesantes() {
         nuevomes=new Date() //nuevo objeto de fecha
         primeromes--; //Restamos un d�a al 1 del mes visualizado
         nuevomes.setTime(primeromes) //cambiamos fecha al mes anterior
         mescal=nuevomes.getMonth() //cambiamos las variables que usar�n las funciones
         annocal=nuevomes.getFullYear()
         cabecera() //llamada a funcion de cambio de cabecera
         escribirdias() //llamada a funcion de cambio de tabla.
         }
//ver mes posterior
function mesdespues() {
         nuevomes=new Date() //nuevo obejto fecha
         tiempounix=primeromes.getTime() //tiempo de primero mes visible
         tiempounix=tiempounix+(45*24*60*60*1000) //le a�adimos 45 d�as
         nuevomes.setTime(tiempounix) //fecha con mes posterior.
         mescal=nuevomes.getMonth() //cambiamos variables
         annocal=nuevomes.getFullYear()
         cabecera() //escribir la cabecera
         escribirdias() //escribir la tabla
         }
//volver al mes actual
function actualizar() {
         mescal=hoy.getMonth(); //cambiar a mes actual
         annocal=hoy.getFullYear(); //cambiar a a�o actual
         cabecera() //escribir la cabecera
         escribirdias() //escribir la tabla
         }
//ir al mes buscado
function mifecha() {
         //Recoger dato del a�o en el formulario
         mianno=document.buscar.buscaanno.value;
         //recoger dato del mes en el formulario
         listameses=document.buscar.buscames;
         opciones=listameses.options;
         num=listameses.selectedIndex
         mimes=opciones[num].value;
         //Comprobar si el a�o est� bien escrito
         if (isNaN(mianno) || mianno<1) {
            //a�o mal escrito: mensaje de error
            alert("El a�o no es v�lido:\n debe ser un n�mero mayor que 0")
            }
         else { //a�o bien escrito: ver mes en calendario:
              mife=new Date(); //nueva fecha
              mife.setMonth(mimes); //a�adir mes y a�o a nueva fecha
              mife.setFullYear(mianno);
              mescal=mife.getMonth(); //cambiar a mes y a�o indicados
              annocal=mife.getFullYear();
              cabecera() //escribir cabecera
              escribirdias() //escribir tabla
              }
         }
