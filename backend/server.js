import express from "express";
import cors from "cors";
import { router_auto, router_lang, router_user } from "./api/janwar.js";
import emailRoutes from "./api/emails.js";
import bodyParser from 'body-parser';


//require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT || 5050;
const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(cors());

app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api/automata", router_auto);
app.use("/api/languages", router_lang);
app.use("/api/users", router_user);

app.use(bodyParser.json());
app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});