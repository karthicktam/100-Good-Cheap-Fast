import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);
  const [fast, setFast] = useState(false);
  const [lastChecked, setLastChecked] = useState("");

  useEffect(() => {
    if (good === true && cheap === true && fast === true) {
      if (lastChecked === "good") {
        setFast(false);
      }

      if (lastChecked === "cheap") {
        setGood(false);
      }

      if (lastChecked === "fast") {
        setCheap(false);
      }
    }
  }, [lastChecked, good, cheap, fast]);

  const clickHandler = (val) => {
    switch (val) {
      case "good":
        setGood(!good);
        setLastChecked("good");
        break;

      case "cheap":
        setCheap(!cheap);
        setLastChecked("cheap");
        break;

      case "fast":
        setFast(!fast);
        setLastChecked("fast");
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input
          type="checkbox"
          onChange={() => clickHandler("good")}
          className="toggle"
          id="good"
          checked={good}
        />
        <label htmlFor="good" className="label">
          <div className="ball"></div>
        </label>
        <span>Good</span>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          onChange={() => clickHandler("cheap")}
          className="toggle"
          id="cheap"
          checked={cheap}
        />
        <label htmlFor="cheap" className="label">
          <div className="ball"></div>
        </label>
        <span>Cheap</span>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          onChange={() => clickHandler("fast")}
          className="toggle"
          id="fast"
          checked={fast}
        />
        <label htmlFor="fast" className="label">
          <div className="ball"></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
}
