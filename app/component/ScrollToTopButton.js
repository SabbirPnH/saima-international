'use client'
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Use smooth scrolling behavior
      });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-sm bg-[#EDDD5E] text-black p-2 outline-none transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
      onClick={scrollToTop}
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollToTopButton;