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
const texto = document.getElementById('username').value

function cpf(v) {
  if (v.length == 3 || v.length == 7) {
    v += '.'
  } else if (v.length == 11) {
    v += '-'
  } else if (v.length > 13) {
    v = v.slice(0, v.length - 1)
  }
  return v
}

function cnpj(v) {
  if (v.length == 2 || v.length == 6) {
    v += '.'
  } else if (v.length == 10) {
    v += '/'
  } else if (v.length == 15) {
    v += '-'
  } else if (v.length > 18) {
    v = v.slice(0, v.length - 1)
  }
  return v
}

function allowOnlyNumbers(e) {
  var tecla = (window.event) ? e.keyCode : e.which;
  if ((tecla > 47 && tecla < 58)) return true;
  else {
    if (tecla == 8 || tecla == 0) return true;
    else return false;
  }
};
//SIGN-UP e SIGN-IN

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//Materiais

function removermaterial(el) {

  document.getElementById(el).style.display = 'none';

}

function adicionarmaterial(el) {

  document.getElementById(el).style.display = 'flex';

}

//CPNJ/CPF

function removercpfcnpj(el) {

  document.getElementById('text_cpfcnpj').placeholder = 'CPF';

}

function adicionarcpfcnpj(el) {

  document.getElementById('text_cpfcnpj').placeholder = 'CNPJ';

}


document.getElementById('text_cpfcnpj').addEventListener('keypress', (e) => {
  let value = document.getElementById('text_cpfcnpj').value;

  if (document.getElementById('text_cpfcnpj').placeholder == 'CPF') {
    document.getElementById('text_cpfcnpj').value = cpf(value)
  } else {
    document.getElementById('text_cpfcnpj').value = cnpj(value)
  }

}
)
//Dropdown

const lista = document.getElementById('lista')
const selectBtn = document.querySelector(".select-btn"),
  items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
  lista.classList.toggle("open");
});

lista.addEventListener('click', (e) => {
  console.log(e);
  e.target.classList.toggle("checked")
  if (e.target.classList == 'checkbox') {
    e.target.parentElement.classList.toggle("checked")
  }

  let checked = document.querySelectorAll(".checked")
  let btnText = document.querySelector(".btn-text");

  console.log(checked.length);

  if (checked.length > 0) {
    btnText.innerText = `${checked.length} Selecionado`;
  } else {
    btnText.innerText = "Materiais que eu recolho";
  }
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


function success() {
  Swal.fire(
    'Tudo certo!',
    'Conta criada com sucesso!',
    'success'
  )
}

function error() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  })
}
