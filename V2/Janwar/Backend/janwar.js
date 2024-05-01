import express from "express";

import db from "./connection.js";

import { ObjectId } from "mongodb";

const db_users = express.Router();
const router_lang = express.Router();
const router_user = express.Router();

//Janwar API

// get list of present users in janwarUsers
db_users.get("/", async (req, res) => {
  let collection = await db.collection("janwarUsers");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});





// REGULAR LANGUAGES

// get a list of all the languages.
router_lang.get("/", async (req, res) => {
    let collection = await db.collection("RegularLanguages");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
  });

// get a single language by id
router_lang.get("/:id", async (req, res) => {
    let collection = await db.collection("RegularLanguages");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

// create a new language.
router_lang.post("/", async (req, res) => {
    try {
      let newDocument = {
          label: req.body.label,
          starts_from: req.body.starts_from,
          ends_at: req.body.ends_at,
          contains: req.body.contains,
          not_contains: req.body.not_contains,
          creation_date: req.body.creation_date,
          owner: req.body.owner,
      };
      let collection = await db.collection("RegularLanguages");
      let result = await collection.insertOne(newDocument);
      res.send(result).status(204);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding record");
    }
  });

// update a language by id.
router_lang.patch("/:id", async (req, res) => {
    try {
      const query = { _id: new ObjectId(req.params.id) };
      const updates = {
        $set: {
            label: req.body.label,
            starts_from: req.body.starts_from,
            ends_at: req.body.ends_at,
            contains: req.body.contains,
            not_contains: req.body.not_contains,
            creation_date: req.body.creation_date,
            owner: req.body.owner,
        },
      };

      let collection = await db.collection("RegularLanguages");
      let result = await collection.updateOne(query, updates);
      res.send(result).status(200);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating record");
    }
  });

// delete a language
router_lang.delete("/:id", async (req, res) => {
    try {
      const query = { _id: new ObjectId(req.params.id) };

      const collection = db.collection("RegularLanguages");
      let result = await collection.deleteOne(query);

      res.send(result).status(200);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting record");
    }
  });

// SIMULATOR USERS

// get a list of all the users.
router_user.get("/", async (req, res) => {
    let collection = await db.collection("SimulatorUsers");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
    });

// get a single user by id
router_user.get("/:id", async (req, res) => {
    let collection = await db.collection("SimulatorUsers");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
    });

// create a new user.
router_user.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            dob: req.body.dob,
            qualification: req.body.qualification,
            institution: req.body.institution,
            password: req.body.password,
            profile_pic: req.body.profile_pic,
        };
        let collection = await db.collection("SimulatorUsers");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
    });

// update a user by id.
router_user.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
        $set: {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            dob: req.body.dob,
            qualification: req.body.qualification,
            institution: req.body.institution,
            password: req.body.password,
            profile_pic: req.body.profile_pic,
        },
        };

        let collection = await db.collection("SimulatorUsers");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating record");
    }
    });

// delete a user
router_user.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("SimulatorUsers");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting record");
    }
    });

export {db_users, router_lang, router_user }; 
