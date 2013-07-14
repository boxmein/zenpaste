var db = require('nedb'); 
var fs = require('fs');
var pastes = new db({filename: "data/pastes.db", autoload: true});
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', date: new Date().getTime() });
};

exports.list = function (req, res) {
  res.render('index', {})
};

exports.about = function (req, res) {
  res.render('about', {});
};

exports.paste = function (req, res) {
  if (req.params[0])
  {
    pastes.find({_id: req.params[0]}, function(err, doc) {
      if (err) 
        res.send("Error finding paste: " + err);
      if (doc[0]) 
        res.render('paste', doc[0]);
    });
  }
};

exports.seeparams = function (req, res) {
  res.send(req.params);
}

var pretties = {
  "c": "C",
  "coffeescript": "CoffeeScript",
  "csharp": "C#",
  "css": "CSS",
  "d": "D",
  "haskell": "Haskell",
  "html": "HTML",
  "java": "Java",
  "javascript": "Javascript",
  "lua": "Lua",
  "php": "PHP",
  "python": "Python",
  "r": "R",
  "ruby": "Ruby",
  "scheme": "Scheme",
  "shell": "Shell"
}
exports.putpaste = function (req, res) {
  var data = {
    pastedata: req.body.paste,
    date: req.body.date,
    description: req.body.desc,
    author: req.body.author != "anon" ? req.body.author : "Anonymous",
    lang: req.body.language,
    langpretty: pretties[req.body.language],

  }
  pastes.insert(data, function(err, doc) {
    
    res.send('<html><head><meta http-equiv="refresh" content="2;URL=/paste/' + doc._id + '"></head><body><p>Your paste is now located at /paste/' + doc._id + '</p></body></html>' ); 
  });
  // paste data, time, description, something else
}