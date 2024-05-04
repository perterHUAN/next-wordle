import { CircleX } from "lucide-react";
import React from "react";
import ModalWrapper from "./ModalWrapper";

function SettingsInfo({ closeSettingsModal, show }) {
  function toggleDarkMode() {
    document.body.classList.toggle("nightmode");
  }
  function toggleColorBlindMode() {
    document.body.classList.toggle("colorblind");
  }
  return (
    <ModalWrapper show={show}>
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
          <Button toggleSetting={toggleDarkMode} />
        </div>
        <hr />
        <div className="py-4 flex flex-row items-center justify-between gap-6">
          <div>
            <p>Color Blind Mode</p>
            <p className="text-xs">High contrast colors</p>
          </div>
          <Button toggleSetting={toggleColorBlindMode} />
        </div>
        <hr className="py-2" />
      </div>
    </ModalWrapper>
  );
}

function Button({ toggleSetting }) {
  const [isSelect, setSelect] = React.useState(false);
  function handleClick() {
    toggleSetting();
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
