import React, { useEffect, useState } from "react";

import Plus from "../public/plus.svg";
import styles from "./Speaker.module.scss";

interface Props {
  firstName: string;
  lastName: string;
  imageSrc: string;
  talkTitle: string;
  speakerTitle: string;
}

export const Speaker = ({
  firstName,
  lastName,
  talkTitle,
  speakerTitle,
  imageSrc,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => console.log({ expanded }), [expanded]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        rowGap: "18px",
        padding: "60px",
        background: "#000F9F",
        color: "#FFFFFF",
      }}
    >
      <span
        style={{
          gridRow: "1 / span 1",
          gridColumn: "1 / span 1",
          fontSize: "32px",
        }}
      >
        {talkTitle}
      </span>
      <Plus
        onClick={() => setExpanded((expanded) => !expanded)}
        style={{
          gridRow: "1 / span 1",
          gridColumn: "4 / span 1",
          justifySelf: "end",
          cursor: "pointer",
        }}
      />
      <div
        style={{
          gridRow: "2 / span 1",
          gridColumn: "1 / span 3",
          display: "flex",
          gap: "18px",
          justifyContent: "space-between",
        }}
      >
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
        className={styles.container}
        style={{
          display: "flex",
          gap: "8px",
          gridRow: "3 / span 1",
          gridColumn: `1 / span 3`,
          fontFamily: "fit-condensed",
          minWidth: 0,
          minHeight: 0,
        }}
      >
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
      <div
        style={{
          height: "16px",
          background: "red",
          gridRow: "4 / span 1",
          gridColumn: "1 / span 3",
        }}
      ></div>
    </div>
  );
};
