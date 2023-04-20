let imagens = document.querySelectorAll('.cardImg')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector(`#modalImg`)
let btnClose = document.querySelector('#btnClose')
let srcVal = ""


for(let i = 0; i<imagens.length;i++) {
    imagens[i].addEventListener('click', function() {

        srcVal = imagens[i].getAttribute('src')
        modalImg.setAttribute('src', srcVal)
        modal.classList.toggle('modalActive')
    }
    )
}

btnClose.addEventListener('click', function() {
    modal.classList.toggle('modalActive')
}
)


/*for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        alert(i)
    })
}*/