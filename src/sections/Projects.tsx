import { GitHubIcon } from "../components/icons";
import { StatusPill } from "../components/StatusPill";
import { projects } from "../content";
import section from "./section.module.css";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className={section.section}>
      <p className={section.eyebrow}>Projects</p>
      <h2 className={section.title}>One stack, four layers</h2>
      <p className={section.lead}>
        Each layer is built on the one below it, and all of them on the
        language. Nothing is inherited from the systems that came before.
      </p>
      <ol className={styles.list}>
        {projects.map((project, index) => (
          <li key={project.name} className={styles.project}>
            <div className={styles.meta}>
              <span className={styles.layer}>
                L{index} · {project.layer}
              </span>
              <StatusPill status={project.status} />
            </div>
            <div className={styles.main}>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.summary}>{project.summary}</p>
              {project.repository && (
                <a className={styles.repository} href={project.repository}>
                  <GitHubIcon />
                  {project.repository.replace("https://github.com/", "")}
                </a>
              )}
            </div>
            <ul className={styles.facts}>
              {project.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
