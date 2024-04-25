var accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(function (header) {
  header.addEventListener("click", function () {
    var accordionItem = this.parentElement;
    var arrow = this.querySelector(".arrow-svg");

    if (!accordionItem.classList.contains("active")) {
      var activeItem = document.querySelector(".accordion-item.active");
      if (activeItem) {
        activeItem.classList.remove("active");
        activeItem.querySelector(".arrow-svg").classList.remove("opened");
      }
      accordionItem.classList.add("active");
      arrow.classList.add("opened");
    } else {
      accordionItem.classList.remove("active");
      arrow.classList.remove("opened");
    }
  });
});

function toggleAccordion(header) {
  const arrowTop = header.querySelector(".arrow-svg-top");
  const arrowBottom = header.querySelector(".arrow-svg-bottom");

  if (arrowTop.style.display !== "none") {
    arrowTop.style.display = "none";
    arrowBottom.style.display = "inline-block";
  } else {
    arrowTop.style.display = "inline-block";
    arrowBottom.style.display = "none";
  }
}


function scrollToTarget() {
  // Отримання посилання на цільовий блок за його ідентифікатором
  const targetBlock = document.getElementById("targetBlock");

  // Прокрутка сторінки до цільового блоку
  targetBlock.scrollIntoView({ behavior: "smooth" });
}



