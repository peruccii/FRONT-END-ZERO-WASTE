const getMaterial = async() => {
    
    const url = `http://localhost:3000/materiais`

    const response = await fetch(url)
    const material = await response.json()

    return material
}

const createList = (data) => {

    const li = document.createElement('li')

    li.innerHTML = 
    `
                  <span class="checkbox">
                      <i class="fa-solid fa-check check-icon"></i>
                  </span>
                  <span class="item-text">${data.nome}</span>
    `

    li.classList.add('item')
    li.id = data.id

    console.log(li)
    return li

}


const loadMaterial = async () => {
   
    const container = document.querySelector('.list-items')
    console.log(container)

    const data = await getMaterial()

    const cards = data.message.map(createList)
    console.log(container)

    container.replaceChildren(...cards)
}


loadMaterial()


