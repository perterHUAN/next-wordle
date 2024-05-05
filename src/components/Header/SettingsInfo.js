import { CircleX } from "lucide-react";
import React from "react";
import ModalWrapper from "./ModalWrapper";
import useColorBlindMode from "@/hooks/useColorBlindMode";
import useDarkTheme from "@/hooks/useDarkTheme";
function SettingsInfo({ closeSettingsModal, show }) {
  const [darkTheme, toggleDarkTheme] = useDarkTheme();
  const [colorBlindMode, toggleColorBlindMode] = useColorBlindMode();

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
          <Button toggleSetting={toggleDarkTheme} setting={darkTheme} />
        </div>
        <hr />
        <div className="py-4 flex flex-row items-center justify-between gap-6">
          <div>
            <p>Color Blind Mode</p>
            <p className="text-xs">High contrast colors</p>
          </div>
          <Button
            toggleSetting={toggleColorBlindMode}
            setting={colorBlindMode}
          />
        </div>
        <hr className="py-2" />
      </div>
    </ModalWrapper>
  );
}

function Button({ toggleSetting, setting }) {
  return (
    <div
      className="w-10 h-5 rounded-full border-2 box-content relative"
      style={{
        backgroundColor: setting ? "var(--green)" : "var(--color-tone-4)",
        borderColor: setting ? "var(--green)" : "var(--color-tone-4)",
      }}
      onClick={toggleSetting}
    >
      <div
        className={`w-5 h-5 rounded-full absolute top-0 transition-transform ${
          setting ? "translate-x-full" : ""
        }`}
        style={{
          backgroundColor: "var(--color-tone-7)",
        }}
      ></div>
    </div>
  );
}
export default SettingsInfo;
