import React from "react";
function useNotification() {
  const [message, setMessge] = React.useState("");
  const notify = React.useCallback((messge) => {
    setMessge(messge);
    setTimeout(() => setMessge(""), 1000);
  }, []);
  return [message, notify];
}
export default useNotification;
