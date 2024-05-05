import useColorThemeToggle from "./useColorThemeToggle";

function useColorBlindMode() {
  return useColorThemeToggle("colorblind", "color-blind-mode");
}
export default useColorBlindMode;
