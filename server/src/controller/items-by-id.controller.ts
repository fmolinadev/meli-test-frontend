/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { Request, Response } from "express";
import { getItemByIdService } from "../services";

const getProductByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ error: "El parámetro 'id' es requerido" });
      return;
    }

    const results = await getItemByIdService(id);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "No se encuentran producto con ese id.",
    });
  }
};

export default getProductByIdController;
