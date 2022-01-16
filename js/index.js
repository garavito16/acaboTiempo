let divSegundos = document.querySelector("#seconds");
let divHoras = document.querySelector("#hour");
let divMinutos = document.querySelector("#minutes");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    
    let segundos = ((time%3600)%60)*6+180;
    let minutos = ((time%3600)/60)*6+180;
    let horas = (time/3600)*30+180;

    divSegundos.style.transform = "rotate("+segundos+"deg)";
    divMinutos.style.transform = "rotate("+minutos+"deg)";
    divHoras.style.transform = "rotate("+horas+"deg)";
}, 1000);