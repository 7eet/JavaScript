var mustache = require('mustache');
var result = mustache.render("Hello {{first}} {{last}}", { first: "World", last: "!!"});
console.log(result);
