export const className = (...classNames: (string | undefined | boolean)[]) =>
  classNames.filter((className) => className).join(" ");
