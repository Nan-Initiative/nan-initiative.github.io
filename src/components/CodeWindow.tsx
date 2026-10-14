import { highlight } from "./highlight";
import styles from "./CodeWindow.module.css";

export function CodeWindow({ file, code }: { file: string; code: string }) {
  return (
    <figure className={styles.window}>
      <figcaption className={styles.bar}>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {file}
      </figcaption>
      <pre className={styles.code}>
        <code>
          {code.split("\n").map((line, row) => (
            <span key={row} className={styles.line}>
              {highlight(line).map((token, column) => (
                <span key={column} className={styles[token.kind]}>
                  {token.text}
                </span>
              ))}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
