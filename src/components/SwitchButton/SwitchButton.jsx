import { useEffect, useState } from "react";
import "./SwitchButton.css";

function SwitchButton() {
  const currentTheme = localStorage.getItem("theme") || "light";
  const [value, setValue] = useState(Boolean(currentTheme === "dark"));
  const [theme, setTheme] = useState(currentTheme);

  const handleToggleTheme = () => {
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
          handleToggleTheme();
        }}
      >
        <div className="checkbox__ball"></div>
        <span className="checkbox__text"></span>
      </div>
    </div>
  );
}

export default SwitchButton;
