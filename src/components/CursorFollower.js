import { useEffect, useState } from "react";

function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const isHoverable = (element) => {
    if (!element) return false;
    
    const tagName = element.tagName?.toLowerCase();
    const computedStyle = window.getComputedStyle(element);
    const cursor = computedStyle.cursor;
    
    return (
      tagName === "a" ||
      tagName === "button" ||
      cursor === "pointer" ||
      element.onclick !== null ||
      element.getAttribute("role") === "button" ||
      element.closest("a") !== null ||
      element.closest("button") !== null
    );
  };

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const element = document.elementFromPoint(e.clientX, e.clientY);
      setIsHovering(isHoverable(element));
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className={`cursor-follower ${isHovering ? "filled" : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  );
}

export default CursorFollower;

