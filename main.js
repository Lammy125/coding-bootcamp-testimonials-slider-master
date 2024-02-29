document.addEventListener("DOMContentLoaded", function () {
  // Get all slider containers
  const sliders = document.querySelectorAll(".sliderCon");

  // Get all icon-prev and icon-next elements
  const prevIcons = document.querySelectorAll(
    '.iconDiv img[src="/icon-prev.svg"]'
  );
  const nextIcons = document.querySelectorAll(
    '.iconDiv img[src="/icon-next.svg"]'
  );

  // Function to show the specified slider and hide others
  function showSlider(index) {
    sliders.forEach((slider, i) => {
      if (i === index) {
        slider.style.display = "flex";
      } else {
        slider.style.display = "none";
      }
    });
  }

  // Handle click on icon-prev
  prevIcons.forEach((prevIcon, index) => {
    prevIcon.addEventListener("click", function () {
      // Calculate the index of the previous slider
      const prevIndex = (index - 1 + sliders.length) % sliders.length;
      showSlider(prevIndex);
    });
  });

  // Handle click on icon-next
  nextIcons.forEach((nextIcon, index) => {
    nextIcon.addEventListener("click", function () {
      // Calculate the index of the next slider
      const nextIndex = (index + 1) % sliders.length;
      showSlider(nextIndex);
    });
  });
});
