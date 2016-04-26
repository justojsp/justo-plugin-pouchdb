//imports
const assert = require("assert");
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-pouchdb/lib/ping").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";
  const SLEEP = (process.env.TRAVIS == "true" ? 75 : 15);

  init({title: "Sleep " + SLEEP + "s"}, function(done) {
    setTimeout(function() {
      done();
    }, SLEEP * 1000);
  });

  suite("PouchDB Server", function() {
    test("op(opts) - must connect", function(done) {
      assert(op([{
        protocol: "http",
        host: "localhost",
        port: 5995,
        db: "test-plugin"
      }], function(error, res) {
        assert(error === undefined);
        res.must.be.eq(true);
        done();
      }) === undefined);
    });
  });

  suite("CouchDB Server", function() {
    test("op(opts) - must connect", function(done) {
      assert(op([{db: "test-plugin"}], function(error, res) {
        assert(error === undefined);
        res.must.be.eq(true);
        done();
      }) === undefined);
    });
  });

  test("op(opts) - must not connect", function(done) {
    assert(op([{port: 5996, db: "test-plugin"}], function(error, res) {
      assert(error === undefined);
      res.must.be.eq(false);
      done();
    }) === undefined);
  });
})();
