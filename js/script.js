const nav = document.querySelector('.my-nav');

window.addEventListener('scroll', function() {
    nav.classList.toggle('fixed', scrollY > 0);
});

// script for smooth scrolling
const links = document.querySelectorAll(".my-nav-list a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// end script

// script for smooth scrolling
const navPhone = document.querySelectorAll(".my-nav-icons a");

for (const phone of navPhone) {
  phone.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href        = this.getAttribute("href");
  const offsetTop   = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// end script

// script for custom cursor
let mouse       = document.querySelector('.cursor');
const h4        = document.querySelectorAll('h4');
const h3        = document.querySelectorAll('h3');
const h2        = document.querySelectorAll('h2');
const p         = document.querySelectorAll('p');


window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}

h3.forEach(h3 => {
    h3.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow');
    });
    h3.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow');
    });
});

h4.forEach(h4 => {
    h4.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow');
    });
    h4.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow');
    });
});

h2.forEach(h2 => {
    h2.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow');
    });
    h2.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow');
    });
});

p.forEach(p => {
    p.addEventListener('mouseover', () => {
        mouse.classList.add('p-link-grow');
    });
    p.addEventListener('mouseleave', () => {
        mouse.classList.remove('p-link-grow');
    });
});
// end script

// Script for unique scrollbar
let progress    = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progressHeignt = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeignt + "%";
}
// End unique scrollbar script


// script for modal
const modal     = document.getElementById('modal');
const login     = document.getElementById('login');
const batal     = document.getElementById('batal');
const span      = document.getElementById('tutup');

login.addEventListener('click', function() {
    modal.style.display = "grid";
});

span.addEventListener('click', function() {
    modal.style.display = "none";
});

batal.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = "none";
    }
});
// end script modal

// script for loader
const load = document.querySelector('.load');

window.addEventListener('beforeunload', function() {
    load.style.display = "grid";
});
// end loader script