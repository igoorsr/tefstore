import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.credit}>
        <a
          className={styles.linkSocial}
          href="https://www.linkedin.com/in/igordsrosa/"
          target="_blank"
        >
          Desenvolvido por Igor dos Santos Rosa
        </a>
      </div>
    </footer>
  );
}
