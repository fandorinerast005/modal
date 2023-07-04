const scrollButton = document.querySelector(".scroll-to-top");
const navLinks = document.querySelectorAll("nav ul li a");
const body = document.body;
const sections = document.querySelectorAll("section:not(.header-section)");
const title = document.querySelector("header h2");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

scrollButton.addEventListener("click", (event) => {
  event.preventDefault();
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
  set3DText(randomColor);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    set3DText(randomColor);
    const href = link.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const text =
  "Мы работаем по всей Тульской области, возможен выезд в другие регионы!...";
const typingText = document.getElementById("typing-text");
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = isDeleting
    ? text.substring(0, charIndex - 1)
    : text.substring(0, charIndex + 1);
  typingText.textContent = currentText;

  if (!isDeleting) {
    charIndex++;
    if (charIndex > text.length) {
      isDeleting = true;
      charIndex = text.length;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
    }
  }
}

setInterval(typeWriter, 100);

const nextButtons = document.querySelectorAll('.next-button');
nextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const randomColor = getRandomColor();
      body.style.backgroundColor = randomColor;
      set3DText(randomColor);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function set3DText(color) {
  const sectionHeadings = document.querySelectorAll("section:not(.header-section) h2");
  const bodyColor = getContrastColor(color); // Получение цвета контрастного фона

  sectionHeadings.forEach((heading) => {
    if (heading.textContent !== "Камин-шабашка") {
      heading.style.textShadow = `2px 2px 4px rgba(0, 0, 0, 0.4), 2px 2px 6px ${color}`;
      heading.style.color = bodyColor; // Использование цвета контрастного фона
    }
  });

  body.style.color = bodyColor; // Изменение цвета текста в основном содержимом страницы
}

function getContrastColor(color) {
  const rgb = hexToRgb(color);
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness >= 128 ? "#000" : "#FFF";
}

function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.pageYOffset;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop - windowHeight + sectionHeight * 0.5) {
      section.classList.add(index % 2 === 0 ? "from-right" : "from-left");
    } else {
      section.classList.remove("from-right", "from-left");
    }
  });

  if (window.pageYOffset > 200) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

  function generateRandomCaptcha() {
    var min = 10000;
    var max = 99999;
    var captcha = Math.floor(Math.random() * (max - min + 1)) + min;
    return captcha;
  }

  function generateCaptcha() {
    var captcha = generateRandomCaptcha();
    var captchaContainer = document.getElementById("captchaContainer");
    captchaContainer.innerHTML = captcha;
  }

  function verifyNotARobot() {
    var userInput = document.getElementById("captchaInput").value;
    var captcha = parseInt(document.getElementById("captchaContainer").innerHTML);

    if (userInput === captcha.toString()) {
      alert("Проверка пройдена!");
      closeModal();
      localStorage.setItem("captchaVerified", "true");
    } else {
      alert("Проверка не пройдена!");
    }
  }

  function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }

  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  window.onload = function () {
    var captchaVerified = localStorage.getItem("captchaVerified");

    if (!captchaVerified) {
      generateCaptcha();
      openModal();
    }

    var verifyBtn = document.getElementById("verifyBtn");
    verifyBtn.addEventListener("click", verifyNotARobot);
  };
