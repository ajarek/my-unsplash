import {PanelData} from './class/panel-data.js'
const main =document.querySelector('main')
const btn = document.querySelector('.btn')
let newSrc =''

let photos = [
    'https://cdn.pixabay.com/photo/2020/07/08/04/07/sea-5382487_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg'
]

function displayPhotos() {
    main.innerHTML = ''
    for(let i = 0; i < photos.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `<img src=${photos[i]} alt="">`
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn','btn-warning')
    deleteBtn.innerHTML = 'Delete'
    const label= document.createElement('p')
    label.classList.add('label')
    label.innerHTML = 'Label'
    card.append(deleteBtn,label)
    main.appendChild(card)
    
    }
    displayDeleteBtn()
}
displayPhotos()

function renderForm() {
    const panel = new PanelData() 
    document.body.appendChild(panel.createPanel())
    btn.removeEventListener('click',renderForm)
    cancelForm()
    submitForm()
}
btn.addEventListener('click',renderForm)

function addPhoto(e) {
    e.preventDefault()
    if(photos.length>=7) {
    photos.pop()
    photos.unshift(newSrc)
    }
    else {
    photos.unshift(newSrc)
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
