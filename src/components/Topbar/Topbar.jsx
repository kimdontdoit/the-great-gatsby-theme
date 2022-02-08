import React, { useEffect } from "react";

import { Link } from "gatsby";

import "./Topbar.css";

const Topbar = (props) => {
  const { topbarFixed } = props;

  return (
    <div className={`topbar ${topbarFixed ? "fixed" : ""}`}>
      <div className="innerTopbar">
        <div className="left">
          {/*<input
          type="text"
          className="searchbar"
          placeholder="Search resources"
        />*/}
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/signup" activeClassName="active">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" activeClassName="active">
                Login
              </Link>
            </li>
            <li>
              <a className="button is-primary cta" href="/">
                Submit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
