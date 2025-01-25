/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "./routes/index.routes";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT ?? 3001;

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use("/", routes);

server.listen(PORT, () => console.log(`Server | Ready from port ${PORT}`));
