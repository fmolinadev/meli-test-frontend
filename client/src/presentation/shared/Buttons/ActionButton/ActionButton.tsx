import styles from "./action-button.module.scss";

interface Props {
  onClick: () => void;
  text: string;
}

export const ActionButton = ({ onClick, text }: Props) => {
  return (
    <button onClick={onClick} className={`${styles["button-action"]}`}>
      {text}
    </button>
  );
};
