(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, story) {
  this.title = title;
  this.story = story;
}

Journal.prototype.wordNumber = function(story) {
  var count = 0;
  var words = story.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i] != "")
      count += 1;
    }
  return count;
};

Journal.prototype.vowNumber = function(story) {
  var count = 0;
  var words = story.split("");
  console.log(words);
  for (var i = 0; i < words.length; i++) {
    if (words[i] ===  "a" || "e" || "i" || "o" || "u")
      count += 1;
    }
  return count;
};
Journal.prototype.conNumber = function() {
  var output = [];

  return output;
};
Journal.prototype.getTeaser = function() {
  var output = [];

  return output;
};


exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var story = $('#story').val();
    var newEntry = new Journal(title, story);
    var wordCount = newEntry.wordNumber(story);
    var vowCount = newEntry.vowNumber(story);
    // var conCount = newEntry.conNumber(story);
    $('#solution').append(`<li> Word Count: ` + wordCount + `</li> <li>` + vowCount + ` </li>`
    );
  });
});

},{"./../js/journal.js":1}]},{},[2]);
