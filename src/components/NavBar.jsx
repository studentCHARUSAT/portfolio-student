import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const activeIndex = tabs.findIndex(
    (tab) => tab.path === location.pathname
  );

  return (
    <nav className="tab-nav">
      <div
        className="tab-indicator"
        style={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `tab-link ${isActive ? "active" : ""}`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;