import React, { useState, useEffect, useRef, ReactNode } from "react";

export default function useComponentVisible(initialIsVisible: boolean) {
  const [isOpen, setIsOpen] = useState(initialIsVisible);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { containerRef, isOpen, setIsOpen };
}
