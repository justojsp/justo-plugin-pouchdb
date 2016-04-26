//imports
import PouchDB from "pouchdb";
import replicationStream from "pouchdb-replication-stream";
import MemoryStream from "memorystream";
import * as fs from "justo-fs";

//install plugin
PouchDB.plugin(replicationStream.plugin);
PouchDB.adapter("writableStream", replicationStream.adapters.writableStream);

/**
 * Task operation.
 */
export default function op(params, done) {
  var opts, remOpts, stream, dump = "";

  //(1) arguments
  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};
  if (!opts.db) throw new Error("db expected.");
  if (!opts.dst) throw new Error("dst expected.");

  //(2) remote options
  if (opts.username) remOpts = {auth: {username: opts.username, password: opts.password}};

  //(3) dump
  stream = new MemoryStream();

  stream.on('data', function(chunk) {
    dump += chunk.toString();
  });

  new PouchDB(
    `${opts.protocol||"http"}://${opts.host||"localhost"}:${opts.port||5984}/${opts.db}`,
    remOpts
  ).dump(stream).then(function() {
    new fs.File(opts.dst).text = dump;
    done();
  }).catch(function(err) {
    done(err);
  });
}
