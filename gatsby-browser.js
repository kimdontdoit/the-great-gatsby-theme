import React from "react";
import { SettingsProvider } from "@kimdontdoit/the-great-gatsby-theme/src/context/SettingsContext";

export const wrapRootElement = ({ element }) => (
  <SettingsProvider>{element}</SettingsProvider>
);
