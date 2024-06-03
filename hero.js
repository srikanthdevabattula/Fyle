document.addEventListener("DOMContentLoaded", () => {
    const heroContainer = document.getElementById('hero-container');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const hero1 = document.createElement('div');
    hero1.classList.add('hero1');

    const h4 = document.createElement('h4');
    h4.textContent = 'AWARD WINNING';

    const h1 = document.createElement('h1');
    h1.textContent = 'Digital Marketing Agency';

    const p = document.createElement('p');
    p.textContent = 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum';

    const button = document.createElement('button');
    button.textContent = 'CONTACT US';
    button.id = 'contactUsButton';

    hero1.appendChild(h4);
    hero1.appendChild(h1);
    hero1.appendChild(p);
    hero1.appendChild(button);

    const hero2 = document.createElement('div');
    hero2.classList.add('hero2');

    const img = document.createElement('img');
    img.src = './assets/hero.png';
    img.alt = '';

    hero2.appendChild(img);

    hero.appendChild(hero1);
    hero.appendChild(hero2);

    heroContainer.appendChild(hero);
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('contactUsButton');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    document.getElementById('contactForm').onsubmit = function(event) {
        event.preventDefault();
        const span = document.getElementsByClassName('close')[0];

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        fetch('https://getform.io/f/paygxjya', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                
                    modal.style.display = 'none';
                
                return response.text().then(text => { throw new Error(text) });
            }
            return response.json();
        })
        .then(() => {
            // Close the modal after form submission
            const modal = document.getElementById('contactModal');
            modal.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            modal.style.display = 'none';
            // Handle error here if needed
        });
       
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = dots.length;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > totalSlides) { slideIndex = 1; }
        if (n < 1) { slideIndex = totalSlides; }
        updateSlides();
    }

    function updateSlides() {
        const offset = (slideIndex - 1) * 30; // Each slide is 30% of the width
        slides.style.transform = `translateX(-${offset}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex - 1].classList.add('active');
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

    // Autoplay functionality
    setInterval(() => {
        showSlides(++slideIndex);
    }, 5000); // Change slide every 3 seconds
});




document.addEventListener('DOMContentLoaded', function () {
    const projectDivs = document.querySelectorAll('.op-2 div');
    const imageContainer = document.querySelector('.op-1 img');

    // Ensure the first div is initially selected
    const initialDiv = document.querySelector('.op-2 div.active');
    const initialImage = initialDiv.getAttribute('data-image');
    imageContainer.setAttribute('src', initialImage);

    projectDivs.forEach(div => {
        div.addEventListener('click', function () {
            // Remove 'active' class from all divs
            projectDivs.forEach(d => d.classList.remove('active'));
            // Add 'active' class to the clicked div
            this.classList.add('active');
            // Change the image in the left container
            const newImage = this.getAttribute('data-image');
            imageContainer.setAttribute('src', newImage);
        });
    });
});

