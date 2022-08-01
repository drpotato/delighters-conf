import React from "react";

import { className } from "./className";
import styles from "./ExpandoHeader.module.scss";
import Plus from "../public/plus.svg";

type Props = React.PropsWithChildren<{
  expanded: boolean;
  onExpand: () => void;
}>;

export const ExpandoHeader = ({ children, expanded, onExpand }: Props) => (
  <div className={styles.container}>
    {children}
    <div className={styles.button} onClick={onExpand}>
      <Plus className={className(styles.icon, expanded && styles.rotated)} />
    </div>
  </div>
);
