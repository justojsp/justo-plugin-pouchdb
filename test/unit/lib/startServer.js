//imports
const path = require("path");
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-pouchdb/lib/startServer").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";
  var TMP_DIR, TMP;

  init({title: "Create tmp dir"}, function() {
    TMP_DIR = Dir.createTmpDir();
    TMP = TMP_DIR.path;
  });

  test("op(config)", function() {
    op([{
      host: "localhost",
      port: 5995,
      dir: path.join(TMP, "data"),
      type: "in-memory",
      pidFile: path.join(TMP, "pouchdb-server.pid"),
      log: true,
      wd: TMP
    }]).must.not.be.eq(0);
    file(TMP, "pouchdb-server.pid").must.exist();
  });
})();
