import useLocalStore from "./useLocalStore";
import React from "react";
function useColorThemeToggle(themeName, storeName) {
  const [colorTheme, setColorTheme] = React.useState(false);
  const initial = React.useCallback((state) => {
    setColorTheme(state);
  }, []);
  useLocalStore(colorTheme, storeName, initial);
  React.useEffect(() => {
    if (colorTheme) {
      document.body.classList.add(themeName);
    } else {
      document.body.classList.remove(themeName);
    }
  }, [colorTheme, themeName]);

  const toggleColorTheme = React.useCallback(() => {
    setColorTheme((theme) => !theme);
  }, []);
  return [colorTheme, toggleColorTheme];
}
export default useColorThemeToggle;
