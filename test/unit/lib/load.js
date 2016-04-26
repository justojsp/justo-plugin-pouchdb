//imports
const assert = require("assert");
const path = require("path");
const Driver = require("elisa-pouchdb").Driver;
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-pouchdb/lib/load").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";
  var drv;

  init({title: "Get PouchDB driver"}, function() {
    drv = Driver.getDriver("PouchDB");
  });

  test("op(opts) - without db", function() {
    op.must.raise("db expected.", [[{}]]);
  });

  test("op(opts) - without src", function() {
    op.must.raise("src expected.", [[{db: "test"}]]);
  });

  test("op(config)", function(done) {
    assert(op([{
      host: "localhost",
      port: 5995,
      db: "myloadeddb",
      src: path.join(DATA, "mydb.dmp")
    }], function(error) {
      var coll, res;

      assert(error === undefined);
      coll = drv.openConnection({type: "sync"}, {host: "localhost", port: 5995, db: "myloadeddb"}).db.getCollection("test.mycoll");
      res = coll.q().sort("x").find();
      res.length.must.be.eq(6);
      res.docs[0].must.have({x: 1, y: 1});
      res.docs[1].must.have({x: 1, y: 2});
      res.docs[2].must.have({x: 1, y: 3});
      res.docs[3].must.have({x: 2, y: 1});
      res.docs[4].must.have({x: 2, y: 2});
      res.docs[5].must.have({x: 2, y: 3});
      done();
    }) === undefined);
  });
})();
