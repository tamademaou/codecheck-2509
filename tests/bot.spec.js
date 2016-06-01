var assert = require("chai").assert;
var Bot = require("../app/bot.js");

var command1 = {
  "command": "color",
  "data": "red"
};

var command2 = {
  "command": "xxxxxxxx",
  "data": "yyyyyyyyy"
};

var command3 = {
  "command": "daaaaaaaaaaaaaaaaaa",
  "data": "dl"
};

describe("Bot", function() {

  it("create first command(command1) and generate hash", function() {
    var c1 = new Bot(command1);
    assert.equal(c1.command, "color");
    assert.equal(c1.data, "red");
    c1.generateHash();
    assert.equal(c1.hash, '5a2421317676');
  });

  it("create second command(command2) and generate hash", function() {
    var c2 = new Bot(command2);
    assert.equal(c2.command, "xxxxxxxx");
    assert.equal(c2.data, "yyyyyyyyy");
    c2.generateHash();
    assert.equal(c2.hash, '5b92ee76ecdc280');
  });

  it("create second command(command3) and generate hash", function() {
    var c3 = new Bot(command3);
    assert.equal(c3.command, "daaaaaaaaaaaaaaaaaa");
    assert.equal(c3.data, "dl");
    c3.generateHash();
    assert.equal(c3.hash, '22cf35f16189ca');
  });
});
