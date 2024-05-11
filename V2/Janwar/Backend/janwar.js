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

db_users.post("/postAd", async (req, res) => {
  try {
    console.log("Post Add request received:", req.body);
    if (req.body.postCategory === "Sell") {
      const collection = await db.collection("janwarAds_sells");
      const user = await collection.insertOne(req.body);
      res.status(200).send(user);
    } else {
      const collection = await db.collection("janwarAds_adopts");
      const user = await collection.insertOne(req.body);
      res.status(200).send(user);
    }
    
  } catch (error) {
    console.error("Error during postAdd:", error);
    res.status(500).send("Internal Server Error");
  }
});

db_users.post("/postAcc", async (req, res) => {
  try {
    console.log("Post Add request received:", req.body);
    const collection = await db.collection("janwarAds_accessories");
    const user = await collection.insertOne(req.body);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error during postAdd:", error);
    res.status(500).send("Internal Server Error");
  }
});

db_users.delete("/deleteAd_accessories/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Delete request received for ID:", id);
    
    const collection = await db.collection("janwarAds_accessories");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      console.log("Post deleted successfully.");
      res.status(200).send("Post deleted successfully.");
    } else {
      console.log("No post found with the given ID.");
      res.status(404).send("No post found with the given ID.");
    }
  } catch (error) {
    console.error("Error during post deletion:", error.message);
    console.error(error.stack);
    res.status(500).send("Internal Server Error");
  }
});

db_users.delete("/deletepost/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Delete request received for ID:", id);

    let collection = await db.collection("janwarAds_sells");
    let result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      // If the post is not found in the "janwarAds_sells" collection, try deleting from "janwarAds_adopts" collection
      collection = await db.collection("janwarAds_adopts");
      result = await collection.deleteOne({ _id: new ObjectId(id) });
    }

    if (result.deletedCount === 1) {
      console.log("Post deleted successfully.");
      res.status(200).send("Post deleted successfully.");
    } else {
      console.log("No post found with the given ID.");
      res.status(404).send("No post found with the given ID.");
    }
  } catch (error) {
    console.error("Error during post deletion:", error.message);
    console.error(error.stack);
    res.status(500).send("Internal Server Error");
  }
});



db_users.post("/getAds_sells", async (req, res) => {
  try {
    console.log("Get Ads request received");
    const collection = await db.collection("janwarAds_sells");
    const user = await collection.find().toArray();
    res.status(200).send(user);
  } catch (error) {
    console.error("Error during getAds:", error);
    res.status(500).send("Internal Server Error");
  }
});

db_users.post("/getAds_adopt", async (req, res) => {
  try {
    console.log("Get Ads request received");
    const collection = await db.collection("janwarAds_adopts");
    const user = await collection.find().toArray();
    res.status(200).send(user);
  } catch (error) {
    console.error("Error during getAds:", error);
    res.status(500).send("Internal Server Error");
  }
});

db_users.post("/addtocart", async (req, res) => {
  try {
    console.log("Add to Cart request received:", req.body);
    const cartItem = { ...req.body, _id: new ObjectId() };
    const collection = await db.collection("janwarAds_cart");
    const user = await collection.insertOne(cartItem);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error during Add to Cart:", error);
    res.status(500).send("Internal Server Error");
  }
});

db_users.post("/getAds_cart", async (req, res) => {
  try {
      console.log("Get Ads Cart request received");
      const body = req.body;
      const keys = Object.keys(body);
      const userID = keys[0]; 
      console.log("User that called ID = ", userID);
      const collection = await db.collection("janwarAds_cart");
      const cartItems = await collection.find().toArray();
      //only return those item where userID is same
      const userCartItems = cartItems.filter(item => item.buyerID === userID);
      console.log("User Cart Items = ", userCartItems);
      res.status(200).send(userCartItems);
  } catch (error) {
      console.error("Error during getAds_cart:", error);
      res.status(500).send("Internal Server Error");
  }
});

db_users.post("/removeFromCart", async (req, res) => {
  try {
    console.log("Remove from Cart request received");
    const { itemId } = req.body;
    console.log("Item ID:", itemId);
    const collection = await db.collection("janwarAds_cart");
    const result = await collection.deleteOne({ _id: itemId });

    if (result.deletedCount === 1) {
      console.log("Item removed from cart successfully");
      res.status(200).json({ message: "Item removed from cart successfully" });
    } else {
      console.log("Item not found in the cart");
      res.status(404).json({ message: "Item not found in the cart" });
    }
  } catch (error) {
    console.error("Error during removeFromCart:", error);
    res.status(500).send("Internal Server Error");
  }
});


db_users.post("/removeCart", async (req, res) => {
  try {
    console.log("Remove Cart request received");
      const body = req.body;
      const keys = Object.keys(body);
      const userID = keys[0]; 
    
    console.log("Item ID:", userID);
    const collection = await db.collection("janwarAds_cart");
    const result = await collection.deleteMany({ productID: userID });
    const collection2 = await db.collection("janwarAds_sells");
    const result2 = await collection2.deleteMany({ _id: new ObjectId(userID) });

    if (result.deletedCount > 0) {
      console.log("Item removed from cart successfully");
      res.status(200).send({ message: "Item removed from cart successfully" });
    } else {
      console.log("Item not found in the cart");
      res.status(404).send({ message: "Item not found in the cart" });
    }

  } catch (error) {
    console.error("Error during removeFromCart:", error);
    res.status(500).send("Internal Server Error");
  }
});


db_users.post("/addtoorder", async (req, res) => {
  try {
    console.log("Add to order request received:", req.body);
    const collection = await db.collection("janwarOrders");
    const user = await collection.insertOne(req.body);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error during Add to order:", error);
    res.status(500).send("Internal Server Error");
  }
});

db_users.post("/get_Orders", async (req, res) => {
  try {
      console.log("Get Ads order request received");
      const body = req.body;
      const keys = Object.keys(body);
      const userID = keys[0]; 
      console.log("User that called ID = ", userID);
      const collection = await db.collection("janwarOrders");
      const orderItems = await collection.find().toArray();
      const userorderItems = orderItems.filter(item => item.buyerID === userID);
      console.log("User order Items = ", userorderItems);
      res.status(200).json(userorderItems);
  } catch (error) {
      console.error("Error during janwarOrders:", error);
      res.status(500).send("Internal Server Error");
  }
});

db_users.post("/getAds_accessories", async (req, res) => {
  try {
    console.log("Get Ads request received");
    const collection = await db.collection("janwarAds_accessories");
    const user = await collection.find().toArray();
    console.log("Accessories = ", user);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error during getAds:", error);
    res.status(500).send("Internal Server Error");
  }
});







export {db_users }; 
