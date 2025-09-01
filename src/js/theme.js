export const initTheme = () => {
  const themeButtons = document.querySelectorAll(".theme-switcher button");

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.id === "light-theme" ? "light" : "dark";
      document.body.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);

      themeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);

  themeButtons.forEach((btn) => {
    const expectedTheme = btn.id === "light-theme" ? "light" : "dark";
    if (expectedTheme === savedTheme) {
      btn.classList.add("active");
    }
  });
};