import React from "react";
import { Link } from "gatsby";

import "./Sidebar.css";

import {
  BiHomeAlt,
  BiCabinet,
  BiChevronLeft,
  BiChevronRight,
  BiGridAlt,
  BiMoon,
  BiSun,
} from "react-icons/bi";

import SettingsContext from "../../context/SettingsContext";

const Sidebar = (props) => {
  const { logoImg } = props;

  return (
    <SettingsContext.Consumer>
      {(settings) => (
        <div
          className={`sidebar sticky ${
            settings.isSidebarOpen ? "" : "sidebar-collapsed"
          }`}
        >
          <div className="innerSidebar">
            <div className="upper">
              <button
                className="collapse-sidebar"
                onClick={settings.toggleSidebarOpen}
              >
                <span className="collapse-btn">
                  {settings.isSidebarOpen ? (
                    <BiChevronLeft size="1.75em" />
                  ) : (
                    <BiChevronRight size="1.75em" />
                  )}
                </span>
              </button>

              {logoImg && (
                <div className="logo">
                  <img className="logoImg" alt="" src={logoImg} />
                </div>
              )}

              <ul className="sideNav primaryNav">
                <li className="level0">
                  <Link to="/" activeClassName="active">
                    <BiHomeAlt size="1.25em" />
                    <span className="navLabel">Home</span>
                  </Link>
                </li>
                <li className="level0">
                  <Link to="/browse" activeClassName="active">
                    <BiGridAlt size="1.25em" />
                    <span className="navLabel">Browse</span>
                  </Link>
                </li>
                <li className="level0">
                  <Link to="/categories" activeClassName="active">
                    <BiCabinet />
                    <span className="navLabel">Categories</span>
                  </Link>
                </li>
              </ul>

              {/*<ul className="sideNav secondaryNav">
            <li className="level0">
              <Link to="#" activeClassName="active">
                Likes
              </Link>
            </li>
            <li className="level0">
              <Link to="#" activeClassName="active">
                Collections
              </Link>
            </li>
              </ul> */}
            </div>
            <div className="lower">
              <ul className="copyright">
                <li>
                  <Link to="/terms" activeClassName="active">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" activeClassName="active">
                    Privacy
                  </Link>
                </li>
                <li>
                  <button onClick={settings.toggleNightMode}>
                    {settings.nightMode ? (
                      <BiSun size="1.75em" />
                    ) : (
                      <BiMoon size="1.75em" />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </SettingsContext.Consumer>
  );
};

export default Sidebar;
