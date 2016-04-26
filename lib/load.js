//imports
import PouchDB from "pouchdb";
import {File} from "justo-fs";

//install plugin
PouchDB.plugin(require("pouchdb-load"));

/**
 * Task operation.
 */
export default function op(params, done) {
  var opts, remOpts;

  //(1) arguments
  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};
  if (!opts.db) throw new Error("db expected.");
  if (!opts.src) throw new Error("src expected.");

  //(2) remote options
  if (opts.username) remOpts = {auth: {username: opts.username, password: opts.password}};

  //(3) load
  // console.log(`${opts.protocol||"http"}://${opts.host||"localhost"}:${opts.port||5984}/${opts.db}`);
  new PouchDB(
    `${opts.protocol||"http"}://${opts.host||"localhost"}:${opts.port||5984}/${opts.db}`,
    remOpts
  ).load(new File(opts.src).text).then(function() {
    done();
  }).catch(function(err) {
    done(err);
  });
}
