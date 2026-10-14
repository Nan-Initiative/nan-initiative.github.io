import { Logo } from "../components/Logo";
import { SocialLinks } from "../components/SocialLinks";
import { links } from "../content";
import styles from "./Header.module.css";

const navigation = [
  { id: "projects", label: "Projects" },
  { id: "language", label: "Language" },
  { id: "principles", label: "Principles" },
  { id: "community", label: "Community" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="NaN, back to top">
          <Logo className={styles.logo} />
        </a>
        <nav className={styles.nav} aria-label="Sections">
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.end}>
          <SocialLinks />
          <a className={styles.contribute} href={links.discord}>
            Contribute
          </a>
        </div>
      </div>
    </header>
  );
}
