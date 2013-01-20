/**
 * data/app.js
 */

var GitHub = require("./github");

var app = module.exports = require('appjs');

app.serveFilesFrom(__dirname + '/content');

var github = new GitHub();

var router = app.router;
router.get("/oauth/login", github.auth.authenticate("github"));

router.get("/oauth/callback", function (req, res, next) {
  console.log("callback");
  res.send("callback");
});

var menubar = app.createMenu([{
  label: '&Options',
  submenu:[
    {
      label: '&Prefarences',
      action: function () {
        window.alert("未実装");
      }
    },
    {
      label: 'E&xit',
      action: function () {
        window.close();
      }
    }
  ]
}]);

menubar.on('select', function (item) {
  console.log("menu item %s clicked", item.label);
});

var window = app.createWindow({
  width  : 640,
  height : 460,
  icons  : __dirname + '/content/icons'
});

window.on('create', function () {
  console.log("Window Created");
  window.frame.show();
  window.frame.center();
  window.frame.setMenuBar(menubar);
});

window.on('ready', function () {
  console.log("Window Ready");
  window.process = process;
  window.module = module;

  function F12 (e) {
    return e.keyIdentifier === 'F12';
  }
  function Command_Option_J (e) {
    return e.keyCode === 74 && e.metaKey && e.altKey;
  }
  
  window.addEventListener('keydown', function (e) {
    if (F12(e) || Command_Option_J(e))
      window.frame.openDevTools();
  });
});

window.on('close', function () {
  console.log("Window Closed");
});