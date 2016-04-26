"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 






op;var _os = require("os");var _os2 = _interopRequireDefault(_os);var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var cmd, args, opts, res;


  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = {};
  if (!opts.hasOwnProperty("output")) opts.output = true;


  if (/^win/.test(_os2.default.platform())) cmd = "npm.cmd";else 
  cmd = "npm";

  args = ["uninstall", "-g", "pouchdb-server"];


  res = _child_process2.default.spawnSync(cmd, args);

  if (opts.output) console.log(res.stdout.toString());
  if (res.status) throw new Error(res.stdout.toString());


  return res.status;}