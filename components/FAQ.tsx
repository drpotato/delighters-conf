import React from "react";
import { ExpandoHeader } from "./ExpandoHeader";
import { Theme, themeStyle } from "./Theme";
import { className } from "./className";
import styles from "./FAQ.module.scss";

interface Props {
  title: string;
  description: string;
  expanded: boolean;
  onExpand: () => void;
  theme: Theme;
}

export const FAQ = ({
  title,
  description,
  expanded,
  onExpand,
  theme,
}: Props) => {
  return (
    <div className={className(themeStyle[theme], styles.container)}>
      <ExpandoHeader expanded={expanded} onExpand={onExpand}>
        <h2 style={{ width: "50%" }}>{title}</h2>
      </ExpandoHeader>
      <div
        style={{
          maxWidth: "480px",
          overflow: "hidden",
          lineHeight: expanded ? "150%" : "0px",
          transition: expanded
            ? "line-height 500ms ease-in-out, clip-path 500ms ease-in-out 500ms"
            : "line-height 500ms ease-in-out 500ms, clip-path 500ms ease-in-out",
          clipPath: `inset(0px ${expanded ? "0px" : "100%"} 0px 0px)`,
        }}
      >
        {description}
      </div>
    </div>
  );
};
