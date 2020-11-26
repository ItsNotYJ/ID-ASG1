const menu = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigationList');
    const navLinks = document.querySelectorAll('.navigationList li');
    var out = false;

    //To open the navigation / hamburger menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        //Animating the links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

menu();