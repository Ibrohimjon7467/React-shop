import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="footer-links">
        <a href="https://github.com/Ibrohimjon7467/React-shop" target="_blank" rel="noreferrer">
          View Source on Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
