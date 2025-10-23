import initTheme from './ui/theme.js';
import { initButtons } from './ui/buttons.js';
import '../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const wrapper = document.getElementById('display-wrapper');
  initButtons(display, wrapper);
  initTheme();
});
