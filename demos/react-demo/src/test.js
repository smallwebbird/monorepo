const MT = require("mark-twain");
const fs = require("fs");
const path = require("path");
const util = require("util");
const jsonML = MT(
  fs.readFileSync(path.resolve(__dirname, "./basic.md")).toString()
);
console.log(util.inspect(jsonML, false, null));
