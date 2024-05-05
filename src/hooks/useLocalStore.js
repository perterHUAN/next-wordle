import React from "react";
function useLocalStore(state, name, initial) {
  React.useEffect(() => {
    let store = window.localStorage.getItem(name);
    if (store) initial(JSON.parse(store));
  }, [name, initial]);

  React.useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(state));
  }, [name, state]);
}
export default useLocalStore;
