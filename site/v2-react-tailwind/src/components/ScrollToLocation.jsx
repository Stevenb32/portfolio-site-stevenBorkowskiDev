import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToLocation() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    const pathnameChanged = previousPathname.current !== pathname;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        if (pathnameChanged) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });

          requestAnimationFrame(() => {
            element.scrollIntoView({
              behavior: "smooth",
            });
          });
        } else {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }

      previousPathname.current = pathname;
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    previousPathname.current = pathname;
  }, [pathname, hash]);

  return null;
}

export default ScrollToLocation;
