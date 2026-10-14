import { Cursor } from "../components/Cursor";
import type { CSSProperties } from "react";
import { StatusPill } from "../components/StatusPill";
import { links, projects } from "../content";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <a className={styles.badge} href={links.discord}>
            <span className={styles.badgeDot} />
            Contributors wanted
            <span aria-hidden="true">→</span>
          </a>
          <h1 className={styles.title}>
            Computing, rebuilt from zero for AI
            <Cursor />
          </h1>
          <p className={styles.lead}>
            A language, a kernel, an operating system and an ecosystem, designed
            together so that agents can write, read and trust every layer of the
            machine.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">
              Explore the projects
            </a>
            <a className={styles.secondary} href={links.discord}>
              Contribute
            </a>
          </div>
        </div>
        <ol className={styles.stack} aria-label="The NaN stack">
          {[...projects].reverse().map((project, index) => (
            <li
              key={project.name}
              className={styles.layer}
              style={{ "--depth": index } as CSSProperties}
            >
              <span className={styles.layerIndex}>
                L{projects.length - 1 - index}
              </span>
              <span className={styles.layerName}>{project.name}</span>
              <StatusPill status={project.status} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
