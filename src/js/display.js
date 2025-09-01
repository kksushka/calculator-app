export const updateDisplay = (display, displayWrapper, value) => {
  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth;

  if (display.scrollWidth > display.clientWidth) {
    display.classList.add('scrolled');
    displayWrapper.classList.add('shadow');
  } else {
    display.classList.remove('scrolled');
    displayWrapper.classList.remove('shadow');
  }
};
