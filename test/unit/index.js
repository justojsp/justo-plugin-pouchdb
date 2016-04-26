//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const pkg = require("../../dist/es5/nodejs/justo-plugin-pouchdb");

//suite
suite("API", function() {
  test("dump", function() {
    pkg.dump.must.be.instanceOf(Function);
  });

  test("installServer", function() {
    pkg.installServer.must.be.instanceOf(Function);
  });

  test("load", function() {
    pkg.load.must.be.instanceOf(Function);
  });

  test("ping", function() {
    pkg.ping.must.be.instanceOf(Function);
  });

  test("startServer", function() {
    pkg.startServer.must.be.instanceOf(Function);
  });

  test("uninstallServer", function() {
    pkg.uninstallServer.must.be.instanceOf(Function);
  });
})();
