import React, { useEffect, useState } from "react";

import Plus from "../public/plus.svg";
import styles from "./Speaker.module.scss";

interface Props {
  firstName: string;
  lastName: string;
  imageSrc: string;
  talkTitle: string;
  speakerTitle: string;
  description: string;
}

export const Speaker = ({
  firstName,
  lastName,
  talkTitle,
  speakerTitle,
  imageSrc,
  description,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => console.log({ expanded }), [expanded]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        padding: "60px",
        background: "#000F9F",
        color: "#FFFFFF",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ maxWidth: "25%", fontSize: "32px" }}>{talkTitle}</span>
        <Plus
          onClick={() => setExpanded((expanded) => !expanded)}
          style={{
            cursor: "pointer",
            transform: expanded ? "rotate(-45deg)" : undefined,
            transition: "transform 500ms ease-in-out",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "18px", maxWidth: "75%" }}>
        <span>
          {firstName} {lastName}
        </span>
        <hr
          style={{
            flexGrow: 1,
            height: "1px",
            color: "#ffffff",
          }}
        />
        <span>{speakerTitle}</span>
      </div>
      <div
        style={{
          maxWidth: "480px",
          overflow: "hidden",
          lineHeight: expanded ? "18px" : "0px",
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
};
