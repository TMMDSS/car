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

/*AQUI COMEÇA O SCRIPT DO BTN BARRA LATERAL*/
const btn = document.getElementById('btnMenu')

function animar() {
    btn.classList.toggle('ativar')
}

btn.addEventListener('click', animar) 

/*AQUI COMEÇA O SCRIPT DA SIDEBAR*/

let header = document.querySelector('#navegação')
let showSideBar = false;

function toggleSideBar() {
    showSideBar = !showSideBar;
    if (showSideBar) {
        header.style.marginTop = '-5vh';
        header.style.animationName = 'showSideBar';
    } else {
        header.style.marginTop = '-100vh';
        header.style.animationName = '';
    }
}


window.addEventListener('resize', function(event) {
    if (window.innerWidth > 768 && showSideBar) {
        showSideBar = true;
        toggleSideBar();
    }
    }
)