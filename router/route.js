const express = require('express');
const router = express.Router();
const { allproduct, addpackage, deleteproduct } = require('../controller/demo')

//CRUD APIs
//C CREATE
//R READ
//U UPDATE
//D DELETE
router.get("/api/allproduct", allproduct)
router.post("/api/addpackage", addpackage)
router.delete("/api/deleteproduct", deleteproduct)

module.exports = router