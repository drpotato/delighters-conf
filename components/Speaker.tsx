import React from "react";

import styles from "./Speaker.module.scss";
import { ExpandoHeader } from "./ExpandoHeader";
import { className } from "./className";
import { Theme, themeStyle } from "./Theme";

interface Props {
  firstName: string;
  lastName: string;
  imageSrc: string;
  talkTitle: string;
  speakerTitle: string;
  description: string;
  theme: Theme;
  expanded: boolean;
  onExpanded: () => void;
}

export const Speaker = ({
  firstName,
  lastName,
  talkTitle,
  speakerTitle,
  imageSrc,
  description,
  theme,
  expanded,
  onExpanded,
}: Props) => (
  <div
    className={className(
      themeStyle[theme],
      styles.section,
      expanded && styles.expanded
    )}
  >
    <ExpandoHeader expanded={expanded} onExpand={onExpanded}>
      <h2 style={{ width: "25%" }}>{talkTitle}</h2>
    </ExpandoHeader>
    <div style={{ display: "flex", gap: "18px", maxWidth: "75%" }}>
      <span>
        {firstName} {lastName}
      </span>
      <hr
        style={{
          flexGrow: 1,
          height: "1px",
          color: "var(--foreground-color)",
        }}
      />
      <span>{speakerTitle}</span>
    </div>
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
    <div style={{ height: "84px" }} />
    <div className={styles.container}>
      <span className={styles.name}>{firstName}</span>
      <div className={styles.image} style={{}}>
        <img
          style={{
            height: "100%",
            maxWidth: "100%",
            overflow: "hidden",
            objectFit: "cover",
          }}
          src={imageSrc}
        />
      </div>
      <span className={styles.name}>{lastName}</span>
    </div>
  </div>
);
