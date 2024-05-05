import useColorThemeToggle from "./useColorThemeToggle";

function useDarkTheme() {
  return useColorThemeToggle("nightmode", "dark-theme");
}
export default useDarkTheme;
