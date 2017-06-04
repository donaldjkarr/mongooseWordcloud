/* Scraper: Practice  (18.2.1)
 * ========================= */

// Dependencies:

// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");


// First, tell the console what server3.js is doing
console.log("\n******************************************\n" +
            
            "\n******************************************\n");


// Run request to grab the HTML from awwards's clean website section
request("https://www.reddit.com/r/webdev", function(error, response, html) {

  // Load the HTML into cheerio
  var $ = cheerio.load(html);

  // Make an empty array for saving our scraped info
  var result = [];

  // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
  $("p.title").each(function(i, element) {

    // Save the text of the element (this) in a "title" variable
    var title = $(this).text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    // var link = $(element).children().attr("href");

    // Save these results in an object that we'll push into the result array we defined earlier
      result.push({
      title: title
    });

  });

  // With each link scraped, log the result to the console
  console.log(result);
});