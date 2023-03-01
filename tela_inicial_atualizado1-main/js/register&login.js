const registrar = document.getElementById('registerbtn')
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



const getEndereco = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)
    const endereco = await response.json()

    return endereco
}


const InsertInput = async () => {
    const form = document.getElementById('form-sign-up')
    const username = document.getElementById('username').value
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value
    const cep = document.getElementById('cep').value
    const senha = document.getElementById('senha').value
    const text_cpfcnpj = document.getElementById('text_cpfcnpj').value
    const complemento = document.getElementById('complemento').value
    const data_nacimento = document.getElementById('nascimento').value


    if (form.reportValidity()) {
        const endereco = await getEndereco(cep)

        const gerador = {
            nome: username,
            telefone: telefone,
            email: email,
            cep: cep,
            endereco: {
                cep: cep,
                logradouro: endereco.logradouro,
                bairro: endereco.bairro,
                cidade: endereco.localidade,
                estado: endereco.uf,
                complemento: complemento
            },
            senha: senha,
            data_nascimento: `${data_nacimento}T00:00:00.200Z`
        }

        if (document.getElementById('text_cpfcnpj').placeholder == 'CNPJ') gerador.cnpj = text_cpfcnpj
        else gerador.cpf = text_cpfcnpj


        const response = await fetch(`http://localhost:3000/gerador`, {
            method: 'POST',
            body: JSON.stringify(gerador),
            headers: { "content-type": "application/json" }
        })

        const result = await response.json()
        return result

    }
}


const insertCatador = async () => {
    const form = document.getElementById('form-sign-up')
    const username = document.getElementById('username').value
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value
    const cep = document.getElementById('cep').value
    const senha = document.getElementById('senha').value
    const text_cpfcnpj = document.getElementById('text_cpfcnpj').value
    const complemento = document.getElementById('complemento').value
    const data_nacimento = document.getElementById('nascimento').value
    const checked = document.querySelectorAll('.checked')
    let materiais = []
    checked.forEach(item => {
        materiais.push(item.id)
    })

    const endereco = await getEndereco(cep)

    const catador = {
        nome: username,
        telefone: telefone,
        email: email,
        cep: cep,
        endereco: {
            cep: cep,
            logradouro: endereco.logradouro,
            bairro: endereco.bairro,
            cidade: endereco.localidade,
            estado: endereco.uf,
            complemento: complemento
        },
        materiais: materiais,
        senha: senha,
        data_nascimento: `${data_nacimento}T00:00:00.200Z`
    }

    if (document.getElementById('text_cpfcnpj').placeholder == 'CNPJ') catador.cnpj = text_cpfcnpj
    else catador.cpf = text_cpfcnpj

    const response = await fetch(`http://localhost:3000/catador`, {
        method: 'POST',
        body: JSON.stringify(catador),
        headers: { "content-type": "application/json" }
    })

    const result = await response.json()
    return result
}

document.getElementById('registerbtn').addEventListener('click', async (event) => {

    let insert

    if (a.style.display == "flex") {
        const checked = document.querySelectorAll('.checked')
        let materiais = []
        checked.forEach(item => {
            materiais.push(item.id)
            console.log(materiais);
        })
        insert = await insertCatador()
    } else {
        insert = await InsertInput()
    }

    console.log(insert);

    if (insert.errorsResult) {
        error()
    } else {
        success()
    }
})

const loginUser = async (data) => {
    const url = `http://localhost:3000/user/auth`

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" }
    })

    const result = await response.json()

    console.log(result);
    return result
}

const formLogin = async () => {
    const form = document.getElementById('sign-in-form')

    if (form.reportValidity()) {
        const email = document.getElementById('email-login').value
        const senha = document.getElementById('senha-login').value

        const login = await loginUser({ email, senha })

        if (login.message != 'Não autorizado') {
            localStorage.setItem('token', login.token)
            localStorage.setItem('id', login.user.id)


            if (login.user.pessoa_fisica.length == 0) {
                localStorage.setItem('nome', login.user.pessoa_juridica[0].nome_fantasia)
            } else {
                localStorage.setItem('nome', login.user.pessoa_fisica[0].nome)
            }


            if (login.user.catador.length != 0) {
                localStorage.setItem('catador', true)
            } else {
                localStorage.setItem('catador', false)
            }

            open('../tela_inicial_atualizado1-main/pages/home_page.html', '_self')
        } else {
            error()
        }


    }
}

document.getElementById('sign-in').addEventListener('click', formLogin)


