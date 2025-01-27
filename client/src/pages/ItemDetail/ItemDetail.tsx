import { useParams } from "react-router-dom";
import { useItemDetails } from "../../hooks/useSearchs";
import { DetailItem, LoadingSpinn } from "../../presentation";
import { ResultLayout } from "../../layout";

export const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useItemDetails(id);

  if (isLoading) {
    return <LoadingSpinn />;
  }

  if (error instanceof Error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  if (data) {
    return (
      <ResultLayout>
        <DetailItem detail={data} />
      </ResultLayout>
    );
  }
};
