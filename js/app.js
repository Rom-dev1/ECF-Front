// JS 1
let empty = document.querySelector("#emptyorder")
let order = document.querySelector("#order")
let content = document.querySelector("#hide")


order.addEventListener('click', () => {
    empty.textContent = 'Votre commande a bien été prise en compte'
    content.classList.remove('contentFirstSection', 'flex')
    content.classList.add('displaynone')
})

