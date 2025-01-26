import { NavigateButton } from "../Buttons";

interface Props {
  searchTermos: string;
}

export const EmptyState = ({ searchTermos }: Props) => {
  return (
    <div>
      <h4>No se encontraron resultados para la búsqueda `${searchTermos}`</h4>
      <div>
        <NavigateButton text="Ir al inicio" to="/" />
      </div>
    </div>
  );
};
