import { Cursor } from "../components/Cursor";
import { DiscordIcon, GitHubIcon, YouTubeIcon } from "../components/icons";
import { contributionAreas, links } from "../content";
import section from "./section.module.css";
import styles from "./Community.module.css";

export function Community() {
  return (
    <section id="community" className={section.section}>
      <div className={styles.panel}>
        <div className={styles.intro}>
          <p className={section.eyebrow}>Community</p>
          <h2 className={styles.title}>
            Looking for people who build with AI
            <Cursor />
          </h2>
          <p className={styles.lead}>
            No compiler or kernel background needed. NaN is built by people
            working with AI agents, so the skill we need most is vibe coding
            done well: knowing what to ask for, steering the agent and never
            shipping what you have not checked. Join the Discord to pick a first
            task.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={links.discord}>
              <DiscordIcon />
              Contribute on Discord
            </a>
            <a className={styles.secondary} href={links.youtube}>
              <YouTubeIcon />
              Watch on YouTube
            </a>
            <a className={styles.secondary} href={links.github}>
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </div>
        <ul className={styles.areas}>
          {contributionAreas.map((area) => (
            <li key={area.title} className={styles.area}>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
