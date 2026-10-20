import type { PropsWithChildren } from "react";
import styles from "./site.module.css";

export function Container({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
