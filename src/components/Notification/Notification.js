import React from "react";

function Notification({ message }) {
  return (
    <div
      className="fixed inset-0 grid place-content-center opacity-50"
      style={{ backgroundColor: "var(--modal-content-bg)" }}
    >
      <p className="text-lg max-w-72 font-bold">{message}</p>
    </div>
  );
}

export default Notification;
