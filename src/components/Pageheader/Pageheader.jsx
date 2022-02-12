import React from "react";
import { Link } from "gatsby";

import * as classes from "./Pageheader.module.css";

export default function Pageheader({
  center,
  title,
  subtitle,
  crumbs,
  children,
}) {
  return (
    <header className={`container ${center ? "text-center" : ""}`}>
      {crumbs && (
        <div className={`${classes.crumbs}`}>
          {/*<Link to={`/`}>{`Accueil`}</Link>
          <span> / </span>*/}

          {crumbs.map((val, index) => {
            const isLast = index === crumbs.length - 1;

            if (isLast) {
              return (
                <Link key={index} to={val.url}>
                  {val.label}
                </Link>
              );
            }

            return (
              <>
                <Link key={index} to={val.url}>
                  {val.label}
                </Link>
                <span> / </span>
              </>
            );
          })}
        </div>
      )}

      {title && (
        <h1 itemProp="headline" className={`${classes.headline}`}>
          {title}
        </h1>
      )}

      <div className={`${classes.metas}`}>
        {subtitle && <p className={`${classes.subtitle}`}>{subtitle}</p>}

        {children}
      </div>
    </header>
  );
}
