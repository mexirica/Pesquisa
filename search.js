// JS

const btn = document.querySelector("#botao");
const limpar = document.querySelector("button");
var txt = document.querySelector("#abc").textContent
var Element = document.getElementById("abc");

btn.addEventListener("click", function (e) {
  e.preventDefault();
    var str = document.querySelector("#palavra").value;
    achar(str)
})

limpar.addEventListener("click", function (e) {
  e.preventDefault();
limpa()
})

function limpa(){
  var clean = txt.replaceAll("<span>", "");
  clean = txt.replaceAll("</span>", "");
        Element.innerHTML = clean;
}

function achar(str){
        var found = txt.replaceAll(" "+ str +" ", " <span>"+ str + "</span> ");
        Element.innerHTML = found;
}