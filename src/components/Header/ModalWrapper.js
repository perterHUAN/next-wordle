function ModalWrapper({ children, show }) {
  return (
    <div style={{ display: show ? "block" : "none" }} className="z-20">
      <div
        className="fixed top-0 left-0 right-0 flex flex-row justify-center p-2"
        style={{
          backgroundColor: "var(--modal-content-bg)",
          color: "var(--color-tone-1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
export default ModalWrapper;
