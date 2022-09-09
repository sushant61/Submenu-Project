import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [cols, setCols] = useState("col-2");
  useEffect(() => {
    setCols("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) setCols("col-3");
    else if (links.length === 4) setCols("col-4");
  }, [location, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${cols}`}>
        {links.map((sub, index) => {
          const { label, icon, url } = sub;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};
export default Submenu;
