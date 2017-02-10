var words = "Follow Me!";
var wordsCopy = console.log("Follow Me!Copy")

function additionstring() {
  console.log(`${words} and ${words}`);
}
module.exports = {
  words,
  wordsCopy,
  twoStrings: additionstring()
}