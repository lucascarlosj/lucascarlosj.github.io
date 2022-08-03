$(document).ready(()=>{

    //Whatsapp-shrink
    const content = document.querySelector('[data-shrink="yes"]');

    const span= document.querySelector('[data-shrink="yes"] span')

    span.classList.add('aparecer')
    
    setInterval(function() {
        content.classList.toggle('shrink')
    }, 5000)

    setTimeout(function(){
        setInterval(function() {
            span.classList.toggle('aparecer')
        }, 5000)
    },100)

    //Fim -----------Whatsapp-shrink

    //scrool-animation
    const scrollAnima= document.querySelector('[data-anima="scroll"]')

    const metadeWindow = window.innerHeight * 4.0;

    function animarScroll(){
        const topoItem= scrollAnima.getBoundingClientRect().top

        const itemVisivel = topoItem - metadeWindow<0;
        if(itemVisivel){
            scrollAnima.classList.add('show-button');
        } else{
            scrollAnima.classList.remove('show-button');
        }

        //console.log(topoItem)
        //console.log(metadeWindow)

    }

    window.addEventListener('scroll',animarScroll);
    //scroll suave

    const linkInterno = document.querySelectorAll('[data-scroll="suave"] a[href^="#"]')

    function ScrollTop(event){

        event.preventDefault()

        const href = event.currentTarget.getAttribute('href');

        const topo = document.querySelector(href)

        topo.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linkInterno.addEventListener('click',ScrollTop)


    //-- Lista Horizontal Banners

   

        

});