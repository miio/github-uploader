/**
 * data/router.js
 */

module.exports = function (router) {
  console.log("router initialize");
  router.get("/auth", function (req, res, next) {
    console.log("authorize");
  });
};