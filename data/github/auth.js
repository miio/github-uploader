/**
 * GitHub Auth
 * github/auth.js
 */

var passport = require("passport"),
    GitHubStrategy = require("passport-github").Strategy;

passport.use(new GitHubStrategy({
  clientID    : "08ef34a899c1289e4d51",
  clientSecret: "24c25703325c2f3318cfe74f1426aa7ec4562a01",
  callbackURL : "http://app.js/oauth/callback"
}, function (accessToken, refreshToken, profile, done) {
  console.log({githubId: profile.id});
}));

/*
var auth = {
  run: passport.authenticate.bind(passport, "github"),
  callback: passport.authenticate.bind(passport, "github", {failureRedirect: ""})
};
*/

module.exports = passport;