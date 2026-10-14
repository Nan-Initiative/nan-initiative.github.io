import { CodeWindow } from "../components/CodeWindow";
import { sample, sampleNotes } from "../content";
import section from "./section.module.css";
import styles from "./Language.module.css";

export function Language() {
  return (
    <section id="language" className={section.section}>
      <div className={styles.layout}>
        <div>
          <p className={section.eyebrow}>The language</p>
          <h2 className={section.title}>
            Everything a reader needs, on the page
          </h2>
          <dl className={styles.notes}>
            {sampleNotes.map((note) => (
              <div key={note.title}>
                <dt>{note.title}</dt>
                <dd>{note.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <CodeWindow file="meter.nan" code={sample} />
      </div>
    </section>
  );
}
