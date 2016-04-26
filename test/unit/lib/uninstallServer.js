//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-pouchdb/lib/uninstallServer").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

  test("op(config)", function() {
    op([{

    }]).must.be.eq(0);
  });
})();
