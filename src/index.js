import express from 'express';


const router = express.Router();

import { addNewDriver } from "../express-server/src/app.js";

router.route("/driver").get(addNewDriver);

export default router;