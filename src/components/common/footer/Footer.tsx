import styles from "./footer.module.css";

const { footerContainer } = styles;
function Footer() {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <footer className={footerContainer}>
      © {year} Yamen Store. All rights reserved.
    </footer>
  );
}

export default Footer;
