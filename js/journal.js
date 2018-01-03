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
