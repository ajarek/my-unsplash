export function search() {
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