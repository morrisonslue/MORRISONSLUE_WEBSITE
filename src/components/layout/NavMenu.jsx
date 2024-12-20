import React, { useState, useEffect, useRef } from "react";
import "../../styles/layout/NavMenu.css";

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState("start-here");
  const indicatorRef = useRef(null);

  const menuItems = [
    { id: "start-here", label: "Start Here" },
    { id: "who-i-am", label: "Who I Am" },
    { id: "what-i-do", label: "What I Do" },
    { id: "business-that-drives", label: "Business That Drives" },
    { id: "tech-that-works", label: "Tech That Works" },
    { id: "creative-that-converts", label: "Creative That Converts" },
    { id: "the-human-element", label: "The Human Element" },
    { id: "b-t-c-p", label: "B+T+C+P" },
    { id: "insights", label: "Insights" },
    { id: "results", label: "Results" },
    { id: "lets-solve-things", label: "Let's Solve Things" },
  ];

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const activeElement = document.querySelector(
        `.nav-item[data-id="${activeItem}"]`
      );
      if (activeElement && indicatorRef.current) {
        const rect = activeElement.getBoundingClientRect();
        const containerRect = activeElement.parentElement.getBoundingClientRect();
        const computedStyles = window.getComputedStyle(activeElement);

        // Create a canvas context to measure the exact text width
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context.font = `${computedStyles.fontWeight} ${computedStyles.fontSize} ${computedStyles.fontFamily}`;

        // Measure the rendered text width
        const textWidth = context.measureText(activeElement.textContent.trim()).width;

        // Calculate the horizontal center of the text
        const indicatorX =
          rect.left - containerRect.left + textWidth / 2;

        indicatorRef.current.style.transform = `translateX(${indicatorX}px)`;
      }
    };

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);

    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeItem]);

  const handleMenuClick = (id) => {
    setActiveItem(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="nav-menu">
      <div className="nav-container">
        <ul className="nav-items">
          <div ref={indicatorRef} className="indicator"></div>
          {menuItems.map((item) => (
            <li
              key={item.id}
              data-id={item.id}
              className={`nav-item ${activeItem === item.id ? "active" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;


