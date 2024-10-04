import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToDiv({ targetDiv }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Find the element based on the passed prop selector (targetDiv)
    const element = document.querySelector(targetDiv);

    if (element) {
      // Scroll to the top of the specified element
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname, targetDiv]); // Trigger whenever the route changes or targetDiv prop changes

  return null;
}

export default ScrollToDiv;
