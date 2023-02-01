// JS 1
let empty = document.querySelector("#emptyorder")
let order = document.querySelector("#order")
let content = document.querySelector("#hide")


order.addEventListener('click', () => {
    empty.textContent = 'Votre commande a bien été prise en compte'
    content.classList.remove('contentFirstSection', 'flex')
    content.classList.add('displaynone')
})

// JS2
meet = document.querySelector("#tomeet")
pictures = document.getElementsByClassName('pictureFirstSection')
video = document.querySelector("#videoyoutube")

meet.addEventListener('click', () => {
    for(picture of pictures){
        picture.classList.add('displaynone')
    }
    video.classList.remove('displaynone')
})

//JS 3
let addyear = document.querySelector("#addyear")
let year = document.querySelector("#year")
let counter = 5

addyear.addEventListener('click', () => {
    counter++
    year.textContent = `depuis ${counter} ans.`
})

// JS 4 

let numbers = document.getElementsByClassName("number")
let random = document.querySelector("#randomNumber")

random.addEventListener('click', () => {
    for (number of numbers){
        let randomNumber = Math.ceil(Math.random()*99999)
        number.textContent = `${randomNumber}+`
    }
})

// JS 5

let input = document.querySelector("#toInput")
let send = document.querySelector("#send")
let message = document.querySelector("#message")

send.addEventListener('click', () => {
    console.log(input.value)
    message.textContent = `Merci ${input.value}!`
    input.classList.add('displaynone')
    send.classList.add('displaynone')

})

//menu 

console.log(window.onresize)

let menu = document.querySelector("#navMenu")
let icon = document.querySelector("#icon")
let iconmenu = document.querySelector("#iconMenu")
let cross = document.querySelector("#cross")


window.onresize < 768 ? menu.classList.add('displaynone') : null

window.addEventListener('resize', () => {
    console.log(window.innerWidth)
    window.innerWidth > 768 ? menu.classList.remove('displaynone') : menu.classList.add('displaynone')
    window.innerWidth > 768 ? menu.classList.remove('menu') : null
    window.innerWidth > 768 ? cross.classList.add('displaynone') : null
    window.innerWidth < 768 ? iconmenu.classList.remove('displaynone') : iconmenu.classList.add('displaynone')
})

iconmenu.addEventListener('click', () => {
    menu.classList.replace('displaynone', 'menu')
    menu.classList.contains('menu') ? cross.classList.remove('displaynone') : null
}) 
//     window.innerWidth < 768 ? iconmenu.classList.remove('displaynone') : null
//     window.innerWidth < 768 ? menu.classList.add('displaynone') : null
//     window.innerWidth > 768 ? menu.classList.remove('displaynone', 'menu') : null
// })





