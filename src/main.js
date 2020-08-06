//Acessando objetos HTML
const headerPersonalElement = document.getElementsByClassName('personal-info')

const imgElementDiv = document.getElementById('img-div')
const divListElement = document.getElementById('divListElement')
const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')

const buttonPlusElement = document.getElementById('button-plus')
const buttonSendElement = document.getElementById('button-send')

//Listas e variáveis
const states = JSON.parse(localStorage.getItem('local_list')) || []

//Definição dos botões
buttonSendElement.onclick = () => {
    render();
}

inputElement.addEventListener('keydown', (e) =>{
    if (e.keyCode === 13) {
        render()
    }
} )

//Função inicial de renderizaçào
render = () => {
    //Analisando se a lista deve aparecer
    if (states.length === 0){
        divListElement.hidden = true
    }
    
    listElement.innerHTML = ''
    addImageElement()
    
    inputElement.focus()
    addToState()

    //Criando lista de atividades
    for (state of states) {

        excludeImageElement()
        var pos = states.indexOf(state)

        var liElement = document.createElement('li')
        var liText = document.createTextNode(state)
        var liP = document.createElement('strong')

        liP.appendChild(liText)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('onclick', `deleteElement(${pos})`)
        var linkTextElement = document.createTextNode('excluir')
        linkElement.appendChild(linkTextElement)

        liP.appendChild(linkElement)
        liElement.appendChild(liP)

        listElement.appendChild(liElement)
        inputElement.value = ''

        divListElement.hidden = false;
    }
}
//Adicionando para a variável State
addToState = () => {
    if (inputElement.value === '' || inputElement.value === null || inputElement.value === "null") {
        console.log('null input')
    }
    else {
        states.push(inputElement.value)
        saveElementtoStorage()
    }
}

//Deletando o valor solicitado da variável
deleteElement = (pos) => {
    states.splice(pos, 1)
    saveElementtoStorage()
    render()
}
//Adicionando a imagem de lista vazia
addImageElement = () => {
    const checkImage = document.getElementById('img-empty-list')
    if (states.length === 0 && checkImage === undefined || checkImage === null) {
        const imgElement = document.createElement('img')
        imgElement.setAttribute('src', '/images/empty-list.png')
        imgElement.setAttribute('alt', 'Lista vazia')
        imgElement.setAttribute('id', 'img-empty-list')
        imgElementDiv.appendChild(imgElement)
    }
    else {
        return
    }
}
//Exclui a Imagem se a lista foi alterada
excludeImageElement = () => {
    const checkImage = document.getElementById('img-empty-list')
    if (checkImage === undefined || checkImage === null) {
        return
    }
    else {
        checkImage.parentNode.removeChild(checkImage)
    }
}

saveElementtoStorage = () =>{
    localStorage.setItem('local_list', JSON.stringify(states))
}

render()