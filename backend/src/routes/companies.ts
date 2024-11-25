import express from "express";
//@ts-ignore
import wrap from "express-async-wrapper";
import { index, show, create, update, destroy } from "../controllers/company";
import { createValidator } from "express-joi-validation";
import { upsertSchema } from "../middleware/companyValidator";

const router = express.Router();
const validator = createValidator();

router.get("/", wrap(index));
router.get("/:id", wrap(show));
router.post("/", validator.body(upsertSchema), wrap(create));
router.put("/:id", validator.body(upsertSchema), wrap(update));
router.delete("/:id", wrap(destroy));

export default router;
