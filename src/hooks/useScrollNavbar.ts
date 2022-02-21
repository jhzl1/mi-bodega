import { useEffect, useState } from "react";

export const useScrollNavbar = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);

  const handleScrollTopbar = () => {
    if (window.scrollY === 0) {
      setNavbarBlur(false);
    } else {
      setNavbarBlur(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTopbar);

    return () => {
      window.removeEventListener("scroll", handleScrollTopbar);
    };
  }, []);

  return navbarBlur;
};
