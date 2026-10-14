import { statusLabels, type Status } from "../content";
import styles from "./StatusPill.module.css";

export function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`${styles.pill} ${styles[status]}`}>
      <span className={styles.dot} aria-hidden="true" />
      {statusLabels[status]}
    </span>
  );
}
