"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 







op;var _os = require("os");var _os2 = _interopRequireDefault(_os);var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);var _justoFs = require("justo-fs");var fs = _interopRequireWildcard(_justoFs);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var cmd, args, opts, res, spawnOpts = { detached: true, stdio: "ignore" };


  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};


  if (/^win/.test(_os2.default.platform())) cmd = "pouchdb-server.cmd";else 
  cmd = "pouchdb-server";

  args = [
  "-o", opts.host || "localhost", 
  "-p", opts.port || 5984];


  if (opts.dir) {args.push("-d");args.push(opts.dir);}
  if (opts.config) {args.push("-c");args.push(opts.config);}
  if (opts.log === false) args.push("-n");
  if (opts.type) {
    if (opts.type == "in-memory") {
      args.push("-m");} else 
    if (opts.type == "disk") {
      if (opts.disk.toLowerCase() === "sqlite") args.push("--sqlite");} else 
    if (opts.type == "backend") {
      if (opts.backend) {args.push("--level-backend");args.push(opts.backend);}} else 
    if (opts.type == "proxy") {
      if (opts.proxy) {args.push("--proxy");args.push(opts.proxy);}}}


  if (opts.wd) spawnOpts.cwd = opts.wd;


  res = _child_process2.default.spawn(cmd, args, spawnOpts);
  res.unref();

  if (opts.pidFile) new fs.File(opts.pidFile).text = res.pid;
  if (res.status) throw new Error(res.stdout.toString());


  return res.pid;}