  var telegramLink = document.querySelector('.telegram-link');
  var underlineOnHover = document.querySelector('.underline-on-hover');

  telegramLink.addEventListener('mouseover', function() {
    underlineOnHover.style.transform = 'translateY(5px) scaleX(1)';
  });

  telegramLink.addEventListener('mouseout', function() {
    underlineOnHover.style.transform = 'translateY(5px) scaleX(0)';
  });

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    var phoneIcon1 = document.createElement("div");
    phoneIcon1.style.background = "url(https://www.example.png";
    phoneIcon1.style.width = "50px";
    phoneIcon1.style.height = "50px";
    phoneIcon1.style.borderRadius = "50%";
    phoneIcon1.style.backgroundColor = "white";
    phoneIcon1.style.position = "fixed";
    phoneIcon1.style.bottom = "20px";
    phoneIcon1.style.left = "20px";
    phoneIcon1.style.cursor = "pointer";
    phoneIcon1.style.zIndex = "9999";

    document.body.appendChild(phoneIcon1);

    function callNumber() {
      window.location.href = "tel:+79534384182";
    }

    phoneIcon1.addEventListener("click", callNumber);

    var isJumping1 = false;
    var jumpInterval1;

    function jump1() {
      if (!isJumping1) {
        isJumping1 = true;
        var initialBottom = parseInt(phoneIcon1.style.bottom);
        jumpInterval1 = setInterval(function() {
          phoneIcon1.style.bottom = parseInt(phoneIcon1.style.bottom) + 10 + "px";
          setTimeout(function() {
            phoneIcon1.style.bottom = initialBottom + "px";
            isJumping1 = false;
          }, 300);
        }, 600);
      }
    }

    phoneIcon1.addEventListener("mouseover", jump1);

    var phoneIcon2 = document.createElement("div");
    phoneIcon2.style.background = "url(https://www.example.png) no-repeat center/cover";
    phoneIcon2.style.width = "50px";
    phoneIcon2.style.height = "50px";
    phoneIcon2.style.borderRadius = "50%";
    phoneIcon2.style.backgroundColor = "white";
    phoneIcon2.style.position = "fixed";
    phoneIcon2.style.bottom = "20px";
    phoneIcon2.style.left = "50%";
    phoneIcon2.style.transform = "translateX(-25%)";
    phoneIcon2.style.cursor = "pointer";
    phoneIcon2.style.zIndex = "9999";
    document.body.appendChild(phoneIcon2);

    function openTelegram() {
      window.open('https://t.me/*****?text=Привет!%20У%20меня%20вопрос%20по%20*****.', '_blank');
    }

    phoneIcon2.addEventListener("click", openTelegram);

    var isJumping2 = false;
    var jumpInterval2;

    function jump2() {
      if (!isJumping2) {
        isJumping2 = true;
        var initialBottom = parseInt(phoneIcon2.style.bottom);
        jumpInterval2 = setInterval(function() {
          phoneIcon2.style.bottom = parseInt(phoneIcon2.style.bottom) + 10 + "px";
          setTimeout(function() {
            phoneIcon2.style.bottom = initialBottom + "px";
            isJumping2 = false;
          }, 300);
        }, 600);
      }
    }

    phoneIcon2.addEventListener("mouseover", jump2);
  }
