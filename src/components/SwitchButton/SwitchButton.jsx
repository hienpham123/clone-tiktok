import { useEffect, useState } from "react";
import "./SwitchButton.css";

function SwitchButton() {
  const isDarkMode = localStorage.getItem("isDark");
  const [value, setValue] = useState(isDarkMode);

  useEffect(() => {
    if (value) {
      localStorage.setItem("isDark", true);
    } else {
      localStorage.setItem("isDark", false);
    }
  }, [value]);

  return (
    <div className="container">
      <div
        className={`checkbox ${value && "checkbox--on"}`}
        onClick={() => setValue(!value)}
      >
        <div className="checkbox__ball"></div>
        <span className="checkbox__text"></span>
      </div>
    </div>
  );
}

export default SwitchButton;
