const loadItems = () => {
    const name = localStorage.getItem('nome')
    let modo
    
    if (localStorage.getItem('catador') == true) {
        modo = 'Catador'
    } else{
        modo = 'Gerador'
    }

    document.getElementById('username').textContent = name
    document.getElementById('modo').textContent = modo
}

loadItems()