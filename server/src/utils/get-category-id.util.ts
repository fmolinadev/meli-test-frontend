import { AvailableFilter } from "../infraestructure/interfaces";

export const getCategoryFromId = (availableFilters: AvailableFilter[]) => {
  const sortedCategories = availableFilters[0].values.sort((a, b) => {
    return b.results - a.results;
  });
  return sortedCategories[0].id;
};
