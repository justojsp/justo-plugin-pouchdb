//imports
import os from "os";
import child_process from "child_process";
import * as fs from "justo-fs";

/**
 * Runs babel CLI.
 */
export default function op(params) {
  var cmd, args, opts, res, spawnOpts = {detached: true, stdio: "ignore"};

  //(1) arguments
  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};

  //(2) determine command
  if (/^win/.test(os.platform())) cmd = "pouchdb-server.cmd";
  else cmd = "pouchdb-server";

  args = [
    "-o", opts.host || "localhost",
    "-p", opts.port || 5984
  ];

  if (opts.dir) { args.push("-d"); args.push(opts.dir); }
  if (opts.config) { args.push("-c"); args.push(opts.config); }
  if (opts.log === false) args.push("-n");
  if (opts.type) {
    if (opts.type == "in-memory") {
      args.push("-m");
    } else if (opts.type == "disk") {
      if (opts.disk.toLowerCase() === "sqlite") args.push("--sqlite");
    } else if (opts.type == "backend") {
      if (opts.backend) { args.push("--level-backend"); args.push(opts.backend); }
    } else if (opts.type =="proxy") {
      if (opts.proxy) { args.push("--proxy"); args.push(opts.proxy); }
    }
  }
  if (opts.wd) spawnOpts.cwd = opts.wd;

  //(3) run
  res = child_process.spawn(cmd, args, spawnOpts);
  res.unref();

  if (opts.pidFile) new fs.File(opts.pidFile).text = res.pid;
  if (res.status) throw new Error(res.stdout.toString());

  //(5) return
  return res.pid;
}
