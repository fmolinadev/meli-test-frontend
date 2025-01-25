/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { Request, Response } from "express";
import { getItemsResultService } from "../services";

export const getSearchItemsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = req.query.q;

    if (!product) {
      res.status(400).json({ error: "No se ingreso el nombre de producto" });
      return;
    }

    const results = await getItemsResultService(product.toString());
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
