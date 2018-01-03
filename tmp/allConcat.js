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
    $('#solution').append(`<li> Word Count: ` + wordCount + `</li> <li> Vowel Count: ` + vowCount + ` </li>`
    );
  });
});
