"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>();
  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const escKeyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", escKeyHandler);

    return () => {
      document.removeEventListener("keydown", escKeyHandler);
    };
  }, []);

  useOnClickOutside(navRef, () => setActiveIndex(null));
  return (
    <div className=" flex h-full gap-4" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, idx) => {
        const handleOpen = () => {
          if (activeIndex === idx) {
            setActiveIndex(null);
          } else {
            setActiveIndex(idx);
          }
        };

        const isOpen = idx === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
