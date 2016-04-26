//imports
import PouchDB from "pouchdb";

/**
 * Task operation.
 */
export default function op(params, done) {
  var opts, auth, cx;

  //(1) arguments
  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};

  //(2) connect
  cx = new PouchDB(`${opts.protocol||"http"}://${opts.host||"localhost"}:${opts.port||5984}/${opts.db}`);

  //(3) ping
  cx.info(function(error, res) {
    done(undefined, !error);
  });
}
