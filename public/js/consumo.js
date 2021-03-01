const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', () => {
        //toggle nav    
        nav.classList.toggle('nav-active');
    
        //animate links
        navLinks.forEach((link, pg_media_consumo) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${pg_media_consumo / 7 + 0}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

function limpar(){

    document.getElementById("km_perc").value = null
    document.getElementById("litros").value = null
    document.getElementById("result").innerHTML = "<h3 class='resultado'>Seu veículo tem uma autonomia de: </h3>"

}