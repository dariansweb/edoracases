import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToDiv({ targetDiv }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Save the current scroll restoration setting
    const originalScrollRestoration = window.history.scrollRestoration;

    // Disable scroll restoration to prevent the browser from overriding the scroll behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Find the element based on the passed prop selector (targetDiv)
    const element = document.querySelector(targetDiv);

    // Ensure scrolling happens after the page has fully loaded
    const scrollToElement = () => {
      if (element) {
        // Scroll to the top of the specified element
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback: If element isn't found, just scroll to top
        console.warn(`ScrollToDiv: Element not found for selector '${targetDiv}'`);
        window.scrollTo(0, 0);
      }
    };

    // Set a small timeout to ensure smoother transition (for mobile/slow loading elements)
    const scrollTimeout = setTimeout(scrollToElement, 100); // Increased to 100ms for reliability

    // Cleanup: Restore scrollRestoration and clear timeout on unmount
    return () => {
      clearTimeout(scrollTimeout);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = originalScrollRestoration;
      }
    };

  }, [pathname, targetDiv]); // Trigger whenever the route or targetDiv changes

  return null;
}

export default ScrollToDiv;