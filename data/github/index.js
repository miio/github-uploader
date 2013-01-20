/**
 * GitHub Class
 * github/index.js
 */

var auth = require("./auth"),
    commit = require("./commit");

function constructor() {
  this.auth = auth;
  this.commit = commit;
}

module.exports = constructor;