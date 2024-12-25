import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import Header from "../../components/common/header/Header";

const { container, wrapper } = styles;
function MainLayout() {
  return (
    <Container className={container}>
      <Header/>
      <div className={wrapper}>MainLayout</div>
    </Container>
  );
}

export default MainLayout;
