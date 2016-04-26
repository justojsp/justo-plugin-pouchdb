//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-pouchdb/lib/installServer").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

  test("op()", function() {
    op([]).must.be.eq(0);
  });

  test({name: "op(config)", onlyif: process.env.TRAVIS != "true"}, function() {
    op([{
      version: "1.1.1",
      output: false
    }]).must.be.eq(0);
  });
})();
