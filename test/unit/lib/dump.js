//imports
const assert = require("assert");
const path = require("path");
const Driver = require("elisa-pouchdb").Driver;
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-pouchdb/lib/dump").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";
  var TMP, TMP_DIR, drv;

  init({title: "Create tmp dir"}, function() {
    TMP_DIR = Dir.createTmpDir();
    TMP = TMP_DIR.path;
  });

  init({title: "Get PouchDB driver"}, function() {
    drv = Driver.getDriver("PouchDB");
  });

  init({title: "Insert data"}, function() {
    const coll = drv.openConnection({type: "sync"}, {host: "localhost", db: "mydb", port: 5995}).db.getCollection("test.mycoll");

    coll.insert([
      {x: 1, y: 1},
      {x: 1, y: 2},
      {x: 1, y: 3},
      {x: 2, y: 1},
      {x: 2, y: 2},
      {x: 2, y: 3}
    ]);
  });

  test("op(opts) - without db", function() {
    op.must.raise("db expected.", [[{}]]);
  });

  test("op(opts) - without dst", function() {
    op.must.raise("dst expected.", [[{db: "test"}]]);
  });

  test("op(config)", function(done) {
    assert(op([{
      db: "mydb",
      port: 5995,
      dst: path.join(TMP, "mydb.dmp")
    }], function(error) {
      assert(error === undefined);
      file(TMP, "mydb.dmp").must.exist();
      file(TMP, "mydb.dmp").must.contain(['"x":1,"y":1', '"x":2,"y":3']);
      done();
    }) === undefined);
  });
})();
