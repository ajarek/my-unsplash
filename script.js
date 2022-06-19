import {PanelData} from './class/panel-data.js'
const main =document.querySelector('main')
const btn = document.querySelector('.btn')
let newSrc =''
let newLabel =''
let photos = [
    {src:'https://cdn.pixabay.com/photo/2020/07/08/04/07/sea-5382487_1280.jpg',label:'Sea'},
    {src:'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',label:'Sea'},
    {src:'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',label:'Sunset'},
    {src:'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg',label:'Pink'},
    {src:'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_1280.jpg',label:'Tree'},
    {src:'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',label:'Road'},
    {src:'https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg',label:'River'}
]

function displayPhotos() {
    main.innerHTML = ''
    for(let i = 0; i < photos.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `<img src=${photos[i].src} alt="">`
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn','btn-warning')
    deleteBtn.innerHTML = 'Delete'
    const label= document.createElement('p')
    label.classList.add('label')
    label.innerHTML = ` ${photos[i].label}`
    card.append(deleteBtn,label)
    main.appendChild(card)
    
    }
    displayDeleteBtn()
}

function renderForm() {
    const panel = new PanelData() 
    document.body.appendChild(panel.createPanel())
    btn.removeEventListener('click',renderForm)
    cancelForm()
    submitForm()
}

function addPhoto(e) {
    e.preventDefault()
    const newPhoto = {src:newSrc,label:newLabel}
    if(photos.length>=7) {
    photos.pop()
    photos.unshift(newPhoto)
    }
    else {
    photos.unshift(newPhoto)
    }
    displayPhotos()
}

function cancelForm() {   
    const cancel = document.querySelector('.btn-danger')
    if(cancel) {
    cancel.addEventListener('click',function(e) {
        e.preventDefault()
        cancel.parentElement.parentElement.remove()
        btn.addEventListener('click',renderForm)
    })
}
}

function submitForm() {
    const form = document.querySelector('.form')
    if(form) {
    form.addEventListener('submit',function(e) {
        e.preventDefault()
        const label = document.querySelector('#label').value
        const url = document.querySelector('#url').value
        newSrc = url||'https://cdn.pixabay.com/photo/2022/03/07/14/06/bird-7053753_1280.jpg'
        newLabel = label||'Bird'
      addPhoto(e)

        form.parentElement.remove()
        btn.addEventListener('click',renderForm)
    })
}
}

function displayDeleteBtn(){
    const allPhotos = document.querySelectorAll('.card')
    const allButtons = document.querySelectorAll('.btn-warning')
    const allLabels = document.querySelectorAll('.label')
    allPhotos.forEach(function(photo,index) {
        photo.addEventListener('click',function(e) {
           allButtons[index].classList.toggle('toggle')
           allLabels[index].classList.toggle('toggle2')
        })
    })
    allButtons.forEach(function(btn,index) {
        btn.addEventListener('click',function(e) {
            e.preventDefault()
           allPhotos[index].remove()
              photos.splice(index,1)
                displayPhotos()
        })
    })
}

function search() {
    const search = document.querySelector('[type=search]')
    
    search.addEventListener('keyup',function(e) {
        const searchValue = e.target.value.toLowerCase()
        const allPhotos = document.querySelectorAll('.card')
        const allLabels = document.querySelectorAll('.label')
        allPhotos.forEach(function(photo,index) {
            const label = allLabels[index].innerHTML.toLowerCase()
            if(label.includes(searchValue)) {
                photo.style.display = 'grid'
            }
            else {
                photo.style.display = 'none'
            }
        })
    })
}


function init() {
    displayPhotos()
    search()
    btn.addEventListener('click',renderForm)
}
init()