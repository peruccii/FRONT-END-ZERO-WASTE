const registrar = document.getElementById('registerbtn')

const getEndereco = async (cep) => {
    console.log(cep)
    const url = `https://viacep.com.br/ws/${cep}/json/`
    console.log(url)

    const response = await fetch(url)
    const endereco = await response.json()
    console.log(endereco);

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
    const numero = document.getElementById('numero').value
    const data_nacimento = document.getElementById('nascimento').value
    

    if(form.reportValidity()){
        const endereco = await getEndereco(cep)
        console.log(endereco)
        const response = await fetch(`http://localhost:3000/gerador`,{
            method: 'POST',
            body: JSON.stringify({
                nome:username,
                telefone:telefone,
                email:email,
                cep:cep,
                endereco: {
                    cep: cep,
                    logradouro: endereco.logradouro,
                    bairro: endereco.bairro,
                    cidade: endereco.localidade,
                    estado: endereco.uf,
                    complemento: complemento
                },
                senha:senha,
                cpf:text_cpfcnpj,
                data_nascimento: `${data_nacimento}T00:00:00.200Z`
            }),
            headers: {"content-type" : "application/json"}


        })
    
        const result = await response.json()
        console.log(result);
        return result
    }

    
    

}




document.getElementById('registerbtn').addEventListener('click',async (event) => {

    
    
    //localStorage.setItem('dados', event.target.textContent)
    await InsertInput()

})

