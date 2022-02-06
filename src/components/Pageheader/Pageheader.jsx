import React from "react";
import { Link } from "gatsby";

export default function Pageheader({ title, subtitle, crumbs, date, center }) {
  return (
    <header className={`container ${center ? "text-center" : ""}`}>
      {crumbs && (
        <div className={`crumbs opacity-60 mb-4`}>
          {/*<Link to={`/`}>{`Accueil`}</Link>
          <span> / </span>*/}

          {crumbs.map((val, index) => {
            const isLast = index === crumbs.length - 1;

            if (isLast) {
              return <Link to={val.url}>{val.label}</Link>;
            }

            return (
              <>
                <Link to={val.url}>{val.label}</Link>
                <span> / </span>
              </>
            );
          })}
        </div>
      )}

      {title && (
        <h1 itemProp="headline" className={`text-4xl font-black`}>
          {title}
        </h1>
      )}

      <div className={`metas`}>
        {subtitle && <p className={`mt-4 opacity-60`}>{subtitle}</p>}

        {date && (
          <p className={`font-bold mt-4 opacity-60`}>Publié le {date}</p>
        )}
      </div>
    </header>
  );
}
