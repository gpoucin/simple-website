// Set the date we're counting down to
// The format is "YYYY-MM-DDTHH:MM:SS"
const countDownDate = new Date("2026-05-09T00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h2>The big day is here!</h2>";
    }
}, 1000);

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('active');

        item.classList.toggle('active');

        answer.style.maxHeight = isOpen ? '0' : answer.scrollHeight + 'px';
    });
});

// --- MOBILE NAVIGATION SIDE PANEL ---
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.main-nav ul');
const pageOverlay = document.querySelector('.page-overlay');

if (navToggle && navList && pageOverlay) {
    navToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        navList.classList.toggle('active');
        pageOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        navToggle.innerHTML = navList.classList.contains('active') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    pageOverlay.addEventListener('click', () => {
        navList.classList.remove('active');
        pageOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
}