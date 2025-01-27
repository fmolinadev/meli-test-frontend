import { Picture } from "../infraestructure/interfaces";

export const getPictureUrls = (pictures: Picture[]): string[] => {
  return pictures.map((picture) => picture.url);
};
