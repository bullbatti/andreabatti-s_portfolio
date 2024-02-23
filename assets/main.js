// Hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");

    hamburger.addEventListener("click", function () {
        toggleMenu();
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            toggleMenu();
        });
    });

    function toggleMenu() {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            navLinks.forEach((link) => {
                link.classList.add("active");
            });
        } else {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });
        }
    }
});


// Navbar scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - height / 2;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('colored');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('colored');
            });
        };
    });
};


// About text typing animation
document.addEventListener("DOMContentLoaded", function () {
    const aboutTextElement = document.getElementById("element");
    const aboutContent = "Hi there! I am Andrea Battista, a recent graduate in electronics and electrical engineering with a deep passion for computer science, particularly programming. Currently, I'm undergoing training to become a Web Application Developer, focusing on Java and Angular. I firmly believe in continuous growth and self-improvement. I'm enthusiastic about learning in the programming field, staying constantly updated on the latest trends and technologies. Teamwork is a value I hold dear; I've demonstrated my ability to work well with motivated and dedicated individuals.";
    let index = 0;
  
    function typeWriter() {
        if (index < aboutContent.length) {
          aboutTextElement.innerHTML += aboutContent.charAt(index);
          index++;
          setTimeout(typeWriter, 20); // Adjust the typing speed here
        }
      }
    
      function clearText() {
        aboutTextElement.innerHTML = '';
        index = 0;
      }
    
      // Check if the user is on the about section
      const aboutSection = document.getElementById("about");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typeWriter();
          } else {
            clearText();
          }
        });
      });
    
      observer.observe(aboutSection);
    });