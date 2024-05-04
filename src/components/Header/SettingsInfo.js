import { CircleX } from "lucide-react";
import React from "react";

function SettingsInfo({ closeSettingsModal }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 flex flex-row justify-center p-2"
      style={{ backgroundColor: "var(--modal-content-bg)" }}
    >
      <div className="max-w-lg relative">
        <button className="absolute right-0 top-0" onClick={closeSettingsModal}>
          <CircleX />
        </button>
        <h2 className="text-center font-bold mb-6">SETTINGS</h2>
        <div className="py-4 flex flex-row items-center justify-between gap-6">
          <div>
            <p>Hard Mode</p>
            <p className="text-xs">
              Any revealed hints must be used in subsequent guesses
            </p>
          </div>
          <Button />
        </div>
        <hr />
        <div className="py-4 flex flex-row items-center justify-between gap-6">
          <div>
            <p>Dark Theme</p>
          </div>
          <Button />
        </div>
        <hr />
        <div className="py-4 flex flex-row items-center justify-between gap-6">
          <div>
            <p>Color Blind Mode</p>
            <p className="text-xs">High contrast colors</p>
          </div>
          <Button />
        </div>
        <hr className="py-2" />
      </div>
    </div>
  );
}

function Button() {
  const [isSelect, setSelect] = React.useState(false);
  function handleClick() {
    setSelect(!isSelect);
  }
  return (
    <div
      className="w-10 h-5 rounded-full border-2 box-content relative"
      style={{
        backgroundColor: isSelect ? "var(--green)" : "var(--color-tone-4)",
        borderColor: isSelect ? "var(--green)" : "var(--color-tone-4)",
      }}
      onClick={handleClick}
    >
      <div
        className={`w-5 h-5 rounded-full absolute top-0 transition-transform ${
          isSelect ? "translate-x-full" : ""
        }`}
        style={{
          backgroundColor: "var(--color-tone-7)",
        }}
      ></div>
    </div>
  );
}
export default SettingsInfo;
