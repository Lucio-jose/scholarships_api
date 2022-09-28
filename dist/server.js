"use strict";

require("reflect-metadata");

var _ = require(".");

require("./dataSource/connection");

const PORT = process.env.PORT || 3333;

_.app.listen(PORT, () => console.log('Server is running!'));