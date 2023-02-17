const registrar = document.getElementById('registerbtn')



const InsertInput = async () => {
    const username = document.getElementById('username').value
  console.log(username);
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value
    const cep = document.getElementById('cep').value
    const senha = document.getElementById('senha').value
    const text_cpfcnpj = document.getElementById('text_cpfcnpj').value
    console.log(text_cpfcnpj);


    

    const response = await fetch(`http://localhost:3000/geradores`,{
        method: 'POST',
        body: JSON.stringify({
            nome:username,
            telefone:telefone,
            email:email,
            cep:cep,
            endereco: {
                cep: '123456789',
                logradouro: 'aaaaa',
                bairro: 'aaaaa',
                cidade: 'bbbbb',
                estado: 'ccccc',
                complemento: 'AAAAA'
            },
            senha:senha,
            cpf:text_cpfcnpj,
            data_nascimento: '2000-02-05'
        }),
        headers: {"content-type" : "application/json"}
    })

    const result = await response.json()
    console.log(result);

    return result

}

console.log(username.value);


document.getElementById('registerbtn').addEventListener('click',async (event) => {

    const cep = document.getElementById('cep').value
    console.log(cep);
    
    localStorage.setItem('dados', event.target.textContent)
    await InsertInput()

})

