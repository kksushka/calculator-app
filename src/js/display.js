export const updateDisplay = (display, value) => {
  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth;

  if (display.scrollWidth > display.clientWidth) {
    display.classList.add('scrolled');
  } else {
    display.classList.remove('scrolled');
  }
};