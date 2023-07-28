import React, { forwardRef } from "react";
import { Link } from "gatsby-plugin-react-i18next";
import classNames from "classnames";

import * as defaultClasses from "./Button.module.css";

export const Button = forwardRef((props, ref) => {
  const {
    label,
    className,
    children,
    onClick,
    type,
    disabled,
    classes: propsClasses,
    href,
  } = props;

  const classes = {
    ...defaultClasses,
    ...propsClasses,
  };
  const buttonClasses = classNames(classes.btn, className);

  const value = label || children;

  if (href) {
    if (href.startsWith("mailto:")) {
      return (
        <a href={href} className={buttonClasses} ref={ref} onClick={onClick}>
          {value}
        </a>
      );
    }

    return (
      <Link to={href} className={buttonClasses} onClick={onClick} ref={ref}>
        {value}
      </Link>
    );
  }

  if (onClick)
    return (
      <button
        onClick={onClick}
        type={type}
        className={buttonClasses}
        disabled={disabled}
        ref={ref}>
        {value}
      </button>
    );

  return (
    <button className={buttonClasses} ref={ref}>
      {children}
    </button>
  );
});
