import { principles } from "../content";
import section from "./section.module.css";
import styles from "./Principles.module.css";

export function Principles() {
  return (
    <section id="principles" className={section.section}>
      <p className={section.eyebrow}>Principles</p>
      <h2 className={section.title}>
        Designed for whoever reads the code next
      </h2>
      <p className={section.lead}>
        An agent reads code through partial views and remembers nothing between
        sessions. Every rule of NaN is chosen so that what it reads is enough.
      </p>
      <ol className={styles.grid}>
        {principles.map((principle, index) => (
          <li key={principle.title} className={styles.item}>
            <span className={styles.index}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{principle.title}</h3>
            <p className={styles.body}>{principle.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
