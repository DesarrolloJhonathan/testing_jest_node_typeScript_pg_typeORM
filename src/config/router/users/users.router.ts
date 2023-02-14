import { Router } from "express";
export const router = Router();

console.log(`\n   user router`);
router.get("/check", (_req, res) => {
  res.status(200).send("Express se ha inicializado correctamente!").json();
});
