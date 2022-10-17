import React from "react";

import Topbar from "the-great-gatsby-theme/src/components/Topbar";
import Sidebar from "the-great-gatsby-theme/src/components/Layout/Sidebar";

import SettingsContext from "the-great-gatsby-theme/src/context/SettingsContext";

import "the-great-gatsby-theme/src/components/Layout/Layout.css";

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
