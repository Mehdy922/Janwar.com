import express from "express";

import db from "./connection.js";

import { ObjectId } from "mongodb";

const db_users = express.Router();
const router_lang = express.Router();
const router_user = express.Router();

//Janwar API

//get user by email  and check if email and pass match

db_users.post("/login", async (req, res) => {
  try {
    console.log("Login request received:", req.body);
    const collection = await db.collection("janwarUsers");
    const query = { email: req.body.email };
    const user = await collection.findOne(query);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    // Compare passwords
    if (user.password !== req.body.password) {
      res.status(401).send("Invalid password");
      return;
    }

    
    

    res.status(200).send(user);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
});

db_users.post("/Pass-reset", async (req, res) => {
  try {

    console.log("Pass reset request received:", req.body);
    const collection = await db.collection("janwarUsers");
    const query = { email: req.body.email };
    const user = await collection.findOne(query);
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    
    res.status(200).send(user);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
});

db_users.post("/register", async (req, res) => {
  try {

    console.log("Register request received:", req.body);
    const collection = await db.collection("janwarUsers");

    const query = { email: req.body.email };
    const userexist = await collection.findOne(query);

    if (!userexist) {
    const user = await collection.insertOne(req.body);
    res.status(200).send(user);
    }
    else{
      console.log("User already exist");
      res.status(404).send("User already exist");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("Internal Server Error");
  }
});







export {db_users }; 
