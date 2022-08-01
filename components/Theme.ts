import styles from "./Theme.module.scss";

export type Theme = "light" | "dark";

export const themeStyle: Record<Theme, string> = {
  light: styles.light,
  dark: styles.dark,
};
