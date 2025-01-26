import styles from "./navigate-button.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

export const NavigateButton = ({ to, text }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className={styles["button-navigate"]}>
      {text}
    </button>
  );
};
