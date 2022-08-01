import React from "react";

import { Theme, themeStyle } from "./Theme";
import { className } from "./className";
import styles from "./HorzontalLine.module.scss";

interface Props {
  theme: Theme;
}

export const HorizontalLine = ({ theme }: Props) => (
  <div className={className(themeStyle[theme], styles.line)} />
);
