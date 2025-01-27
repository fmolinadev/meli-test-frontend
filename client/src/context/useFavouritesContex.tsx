import { createContext, useState, useMemo, ReactNode, useContext } from "react";
import { ItemDetails } from "../interface";

interface FavouritesContextProps {
  favourites: ItemDetails[];
  addToFavourites: (item: ItemDetails) => void;
  removeFromFavourites: (itemId: string) => void;
  clearFavourites: () => void;
}

const FavouritesContext = createContext<FavouritesContextProps | undefined>(
  undefined
);

export const useFavouritesContext = (): FavouritesContextProps => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error(
      "useFavouritesContext debe estar dentro de un FavouritesProvider"
    );
  }
  return context;
};

interface Props {
  children: ReactNode;
}
export const FavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useState<ItemDetails[]>(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const addToFavourites = (item: ItemDetails) => {
    setFavourites((prevFavourites) => {
      const isDuplicate = prevFavourites.some((fav) => fav.id === item.id);
      if (isDuplicate) return prevFavourites;

      const updatedFavourites = [...prevFavourites, item];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  const removeFromFavourites = (itemId: string) => {
    setFavourites((prevFavourites) => {
      const updatedFavourites = prevFavourites.filter(
        (fav) => fav.id !== itemId
      );
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  const clearFavourites = () => {
    setFavourites([]);
    localStorage.removeItem("favourites");
  };

  const value = useMemo(
    () => ({
      favourites,
      addToFavourites,
      removeFromFavourites,
      clearFavourites,
    }),
    [favourites]
  );

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
