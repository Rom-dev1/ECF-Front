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




