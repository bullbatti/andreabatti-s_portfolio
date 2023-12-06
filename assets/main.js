/**********************************************
* Hamburger Menu
**********************************************/
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
    document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

/**********************************************
* Animation on scroll
***********************************************/
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');

        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));