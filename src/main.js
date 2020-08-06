const imgElementDiv = document.getElementById('img-div')
const divListElement = document.getElementById('divListElement')
const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')

const buttonPlusElement = document.getElementById('button-plus')
const buttonSendElement = document.getElementById('button-send')

const states = []

buttonSendElement.onclick = () => {
    render();
}



buttonPlusElement.onclick = () => {
    alert(`${inputElement.value} adicionado`)
}

render = () => {

    if (states.length === 0){
        divListElement.hidden = true
    }

    console.log(states.length)
    listElement.innerHTML = ''
    addImageElement()
    addToState()

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

addToState = () => {
    if (inputElement.value === '' || inputElement.value === null || inputElement.value === "null") {
        console.log('null input')
    }
    else {
        states.push(inputElement.value)
    }
}

deleteElement = (pos) => {

    states.splice(pos, 1)
    render()
}

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

excludeImageElement = () => {
    const checkImage = document.getElementById('img-empty-list')
    if (checkImage === undefined || checkImage === null) {
        return
    }
    else {
        checkImage.parentNode.removeChild(checkImage)
    }
}

render()