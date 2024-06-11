document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tema1-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var activeButton = document.querySelector(".tema1-button.active");
      if (activeButton && activeButton !== button) {
        activeButton.classList.remove("active");
        activeButton.nextElementSibling.style.display = "none";
      }

      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tema2-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var activeButton = document.querySelector(".tema2-button.active");
      if (activeButton && activeButton !== button) {
        activeButton.classList.remove("active");
        activeButton.nextElementSibling.style.display = "none";
      }

      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tema3-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var activeButton = document.querySelector(".tema3-button.active");
      if (activeButton && activeButton !== button) {
        activeButton.classList.remove("active");
        activeButton.nextElementSibling.style.display = "none";
      }

      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tema4-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var activeButton = document.querySelector(".tema4-button.active");
      if (activeButton && activeButton !== button) {
        activeButton.classList.remove("active");
        activeButton.nextElementSibling.style.display = "none";
      }

      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tema5-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var activeButton = document.querySelector(".tema5-button.active");
      if (activeButton && activeButton !== button) {
        activeButton.classList.remove("active");
        activeButton.nextElementSibling.style.display = "none";
      }

      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tema5_2-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var activeButton = document.querySelector(".tema5_2-button.active");
      if (activeButton && activeButton !== button) {
        activeButton.classList.remove("active");
        activeButton.nextElementSibling.style.display = "none";
      }

      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
