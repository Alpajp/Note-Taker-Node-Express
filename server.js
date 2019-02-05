var express = require("express");
var path = require("path");
var app = express();
var router = require("./route");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);



