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
    var phoneIcon = document.createElement("div");
    phoneIcon.style.width = "50px";
    phoneIcon.style.height = "50px";
    phoneIcon.style.borderRadius = "50%";
    phoneIcon.style.backgroundColor = "white";
    phoneIcon.style.position = "fixed";
    phoneIcon.style.bottom = "20px";
    phoneIcon.style.left = "20px";
    phoneIcon.style.cursor = "pointer";
    phoneIcon.style.zIndex = "9999";

    if (/Android/i.test(navigator.userAgent)) {
      phoneIcon.style.background = "url(https://i.postimg.cc/Pf3Bf4Ct/phone-call.png) no-repeat center/cover";
      phoneIcon.addEventListener("click", function() {
        window.location.href = "tel:+79534384182";
      });
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      phoneIcon.style.background = "url(https://i.postimg.cc/C1VmpNS8/telegram-logo-circle-icon-8778978978789.png) no-repeat center/cover";
      phoneIcon.style.left = "50%";
      phoneIcon.style.transform = "translateX(-25%)";
      phoneIcon.addEventListener("click", function() {
        window.open('https://t.me/ttula71?text=Привет!%20У%20меня%20вопрос%20по%20товару%20/%20услуге.', '_blank');
      });
    }

    document.body.appendChild(phoneIcon);

    var isJumping = false;
    var jumpInterval;

    function jump() {
      if (!isJumping) {
        isJumping = true;
        var initialBottom = parseInt(phoneIcon.style.bottom);
        jumpInterval = setInterval(function() {
          phoneIcon.style.bottom = parseInt(phoneIcon.style.bottom) + 10 + "px";
          setTimeout(function() {
            phoneIcon.style.bottom = initialBottom + "px";
            isJumping = false;
          }, 300);
        }, 600);
      }
    }

    phoneIcon.addEventListener("mouseover", jump);
  }
