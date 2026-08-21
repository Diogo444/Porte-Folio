export const useTheme = () => {
  const isDark = useState<boolean>("portfolio-theme-dark", () => true);

  const applyTheme = (dark: boolean) => {
    isDark.value = dark;

    if (!import.meta.client) {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.classList.toggle("light", !dark);
    root.style.colorScheme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const initTheme = () => {
    if (!import.meta.client) {
      return;
    }

    const storedTheme = localStorage.getItem("theme");
    applyTheme(storedTheme ? storedTheme === "dark" : true);
  };

  const toggleTheme = () => {
    applyTheme(!isDark.value);
  };

  return {
    isDark,
    initTheme,
    toggleTheme,
  };
};
