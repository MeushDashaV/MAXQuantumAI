window.onload = function () {
  const videoBlocks = document.querySelectorAll(".video_block");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  // Функція для оновлення видимості блоків
  function updateVisibleBlocks() {
    videoBlocks.forEach((block, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        block.style.display = "flex";
      } else {
        block.style.display = "none";
      }
    });
  }

  // Функція для переміщення каруселі вліво
  function moveLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      updateVisibleBlocks();
    }
  }

  // Функція для переміщення каруселі вправо
  function moveRight() {
    if (currentIndex < videoBlocks.length - 3) {
      currentIndex++;
      updateVisibleBlocks();
    }
  }

  // Обробники подій для стрілок
  prevButton.addEventListener("click", moveLeft);
  nextButton.addEventListener("click", moveRight);

  // Викликаємо функцію для початкової настройки видимості блоків
  updateVisibleBlocks();
};
