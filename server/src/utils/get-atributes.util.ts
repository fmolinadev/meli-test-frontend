import { AtributesCollects, Attribute } from "../infraestructure/interfaces";

export const getAttributesAsArray = (
  attributes: Attribute[]
): AtributesCollects[] => {
  if (!attributes || !Array.isArray(attributes)) {
    return [];
  }

  return attributes.map(({ name, value_name }) => ({
    name,
    value_name,
  }));
};
