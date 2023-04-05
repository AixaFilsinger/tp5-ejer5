let horas= 0;
let  minutos = 0;
let segundos = 0;
let id;

  let horaCronometro = document.getElementById("hora");
 horaCronometro.innerHTML="00:00:00";

 function cronometrar(){
     escribir();
     id = setInterval(escribir,1000);
     
 }

 function escribir(){
     let hAux, mAux, sAux;
     segundos++;
     if (segundos>59)
     {
      minutos++;
      segundos=0;
     }
     if (minutos>59)
     {
         horas++;
         minutos=0;
     }
     if (horas>24)
     {
         horas=0;
     }
 
     if (segundos<10)
     {
         sAux="0"+segundos;
 }else{
     sAux=segundos;}
     if (minutos<10)
     {
         mAux="0"+minutos;
 }else{
     mAux=minutos;}
     if (horas<10)
     {
         hAux="0"+horas;
 }else{
     hAux=horas;}
 
     document.getElementById("hora").innerHTML = hAux + ":" + mAux + ":" + sAux; 
 }

 function parar(){
     clearInterval(id);
     document.getElementsByClassName("btn_iniciar").addEventListener("click",cronometrar);
 
 }
 function reset(){
     clearInterval(id);
     document.getElementById("hora").innerHTML="00:00:00";
     h=0;m=0;s=0;
     document.getElementsByClassName("btn_iniciar").addEventListener("click",cronometrar);
 }