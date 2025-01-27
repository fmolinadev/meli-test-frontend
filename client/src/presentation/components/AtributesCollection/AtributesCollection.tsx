import { AtributesCollects } from "../../../interface";
import styles from "./atributes-collection.module.scss";

interface Props {
  atributes: AtributesCollects[];
}

export const AtributesCollections = ({ atributes }: Props) => {
  const hasManyAttributes = atributes.length > 14;

  return (
    <table
      className={`${styles["atributes-table"]} ${
        hasManyAttributes ? styles["multi-column"] : ""
      }`}
    >
      <tbody>
        {atributes.map((attribute, index) => (
          <tr key={index}>
            <td className={styles["attribute-name"]}>{attribute.name}</td>
            <td className={styles["attribute-value"]}>
              {attribute.value_name || "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
