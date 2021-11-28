import React from "react";
import { SettingsProvider } from "@kimdontdoit/the-great-gatsby-theme/src/context/SettingsContext";

require("@kimdontdoit/the-great-gatsby-theme/src/styles/global.scss");

export const wrapRootElement = ({ element }) => (
  <SettingsProvider>{element}</SettingsProvider>
);
