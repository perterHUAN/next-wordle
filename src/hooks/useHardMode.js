import React from "react"
import useLocalStore from "./useLocalStore";
function useHardMode() {
    const [hardMode, setHarMode] = React.useState(false);

    const initial = React.useCallback((state) => {
        setHarMode(state);
    }, []);
    useLocalStore(hardMode, 'hard-mode', )
}