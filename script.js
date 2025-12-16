// --- Елементи ---
const hamburger = document.querySelector('#hamburger');
const sidebar = document.querySelector('#mySidebar');
const closeBtn = document.querySelector('#closeBtn');
const callBtn = document.querySelector('.btn');
const imagePuppy = document.querySelector('.imagePuppy');

// --- Відкриття меню ---
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  hiddenBtn();
});

// --- Закриття меню через хрестик ---
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  hiddenBtn();
});

// --- Закриття меню при кліку на будь-який пункт ---
const menuLinks = document.querySelectorAll('#mySidebar a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hiddenBtn();
  });
});

// --- Функція приховування кнопки та зображення ---
function hiddenBtn() {
  if (sidebar.classList.contains('active')) {
    callBtn.classList.add('hidden');
    imagePuppy.classList.add('hidden');
  } else {
    callBtn.classList.remove('hidden');
    imagePuppy.classList.remove('hidden');
  }
}

// --- Валідація форми ---
document.querySelector("#myForm").addEventListener('submit', function(event) {
  const name = document.querySelector("#name").value.trim();
  const surname = document.querySelector("#surname").value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const date = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!surname) {
    alert("Please enter your surname.");
    return;
  }

  const phonePattern = /^\d{10,}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number (at least 10 digits).");
    return;
  }

  if (!date) {
    alert("Please select a date.");
    return;
  }

  if (!time) {
    alert("Please select a time.");
    return;
  }

  console.log("Form data:");
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Phone:", phone);
  console.log("Date:", date);
  console.log("Time:", time);

  alert("Form submitted successfully!");
});

// --- Анімації GSAP ---
gsap.to(".logo, .item", {
  opacity: 1,
  duration: 0.2,
  stagger: 1
});

gsap.from("h1", {
  opacity: 0, 
  duration: 1.5,
  delay: 1,
  ease: "power1.in"
});

gsap.from("h3", {
  opacity: 0,
  duration: 1,
  delay: 2,
  ease: "power1.out"
});

gsap.to(".btn", {
  opacity: 1,
  x: 80,
  duration: 2,
  delay: 1.5
});

gsap.to(".imagePuppy", {
  opacity: 1,
  x: -80,
  duration: 2, 
  delay: 1.5
});

// --- Ініціалізація AOS ---
AOS.init({
  duration: 1000,
});
