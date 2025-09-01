const updateDisplay = (displayElement, displayWrapper, value) => {
  const display = displayElement;
  display.textContent = value || '0';
  display.scrollLeft = display.scrollWidth;

  if (display.scrollWidth > display.clientWidth) {
    displayWrapper.classList.add('shadow');
  } else {
    displayWrapper.classList.remove('shadow');
  }
};

export default updateDisplay;
