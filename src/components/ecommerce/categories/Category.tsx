import { Link } from "react-router";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

interface IProps {
  title: string;
  img: string;
  prefix: string;
}

function Category({ title, img, prefix }: IProps) {
  console.log(prefix)
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
}

export default Category;
