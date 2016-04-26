//imports
import os from "os";
import child_process from "child_process";

/**
 * Runs babel CLI.
 */
export default function op(params) {
  var cmd, args, opts, res;

  //(1) arguments
  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = {};
  if (!opts.hasOwnProperty("output")) opts.output = true;

  //(2) determine command
  if (/^win/.test(os.platform())) cmd = "npm.cmd";
  else cmd = "npm";

  args = ["install", "-g", "pouchdb-server" + (opts.version ? "@" + opts.version : "")];

  //(3) run
  res = child_process.spawnSync(cmd, args);

  if (opts.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stdout.toString());

  //(5) return
  return res.status;
}
