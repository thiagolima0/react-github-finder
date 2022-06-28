import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AppNavbar = ({ title }) => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <NavLink to="/" className="text-lg font-bold align-middle">
            {title}
          </NavLink>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  (isActive
                    ? "btn-primary btn btn-md mx-1 btn-rounded"
                    : "btn-ghost btn btn-md mx-1 btn-rounded")
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

AppNavbar.defaultProps = {
  title: "Github Finder",
};

export default AppNavbar;
