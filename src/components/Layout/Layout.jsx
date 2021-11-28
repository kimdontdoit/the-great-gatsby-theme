import React from "react";

import Topbar from "@kimdontdoit/the-great-gatsby-theme/src/components/Topbar";
import Sidebar from "@kimdontdoit/the-great-gatsby-theme/src/components/Layout/Sidebar";

import SettingsContext from "@kimdontdoit/the-great-gatsby-theme/src/context/SettingsContext";

import "@kimdontdoit/the-great-gatsby-theme/src/components/Layout/Layout.scss";

const Layout = ({ children, topbarFixed }) => {
  return (
    <SettingsContext.Consumer>
      {(settings) => (
        <div className={`layout ${settings.nightMode ? "nightMode" : ""}`}>
          <Sidebar />

          <div className="main">
            <Topbar topbarFixed={topbarFixed} />

            {/* main -> body */}
            <div className="content">{children}</div>
          </div>
        </div>
      )}
    </SettingsContext.Consumer>
  );
};

export default Layout;
