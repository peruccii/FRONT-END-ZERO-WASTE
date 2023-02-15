const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const input = document.querySelector("#section-material")
const btn = document.querySelector("#btn-catador")
const btn2 = document.querySelector("#btn-gerador")
const hidden = document.querySelector(".input-fieldhiddden")
const a = document.querySelector("#adicionar_material")
const b = document.querySelector(".items")
const cpfcnpj = document.querySelector("#adicionar_CPFCNPJ")


adicionar_material.addEventListener('click', () => {
  window.scroll({top: window.innerHeight, behavior: "smooth"})
})


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});




function removermaterial(el) {
  
  document.getElementById(el).style.display = 'none';
}
function adicionarmaterial(el) {
  
  document.getElementById(el).style.display = 'flex';
 
 
} 

function removercpfcnpj(el) {
  
  document.getElementById('text_cpfcnpj').placeholder = 'CPF';

  
}
function adicionarcpfcnpj(el) {

  document.getElementById('text_cpfcnpj').placeholder = 'CNPJ';
  
  
 


  
 
 
} 
  




function toggleButton() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#senha').value;

  if (username && password) {
    
    return document.querySelector('#registerbtn').disabled = false;
  }else
  document.querySelector('#registerbtn').disabled = true;
}

 



 /*function adicionarmaterial() {
    var adicionar = document.getElementById("adicionar_material")
    adicionar.classList.add("aparecer")
    
 }

 function removermaterial() {
    var remover = document.getElementById("adicionar_material")
    remover.classList.add("desaparecer")
 }*/

 const selectBtn = document.querySelector(".select-btn"),
 items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
selectBtn.classList.toggle("open");
});

items.forEach(item => {
item.addEventListener("click", () => {
   item.classList.toggle("checked");

   let checked = document.querySelectorAll(".checked"),
       btnText = document.querySelector(".btn-text");

       if(checked && checked.length > 0){
           btnText.innerText = `${checked.length} Selecionado`;
       }else{
           btnText.innerText = "Materiais que eu recolho";
       }
});
})


// SWITCH SCRIPT // 

const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");

loginBtn.addEventListener("click", () => {
  moveBtn.classList.add("rightBtn");
  moveBtn.innerHTML = "Pessoa Fisica"
})

signupBtn.addEventListener("click", () => {
  moveBtn.classList.remove("rightBtn");
  moveBtn.innerHTML = "Pessoa Juridica"
})

