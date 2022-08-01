import React from "react";

import styles from "./Heading.module.scss";
import { Theme, themeStyle } from "./Theme";
import { className } from "./className";

interface Props {
  text: string;
  theme: Theme;
}

export const Heading = ({ text, theme }: Props) => (
  <div className={className(themeStyle[theme], styles.container)}>
    <h1>{text}</h1>
  </div>
);
