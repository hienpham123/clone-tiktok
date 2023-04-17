import { useEffect, useState } from "react";
import "./SwitchButton.css";

function SwitchButton() {
  const [value, setValue] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="container">
      <div
        className={`checkbox ${value && "checkbox--on"}`}
        onClick={() => {
          setValue(!value);
          toggleTheme();
        }}
      >
        <div className="checkbox__ball"></div>
        <span className="checkbox__text"></span>
      </div>
    </div>
  );
}

export default SwitchButton;
