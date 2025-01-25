import { Router } from "express";

const router = Router();

router.use("/", (req, res) => {
  res.send("Configuración base completada");
});

export default router;
