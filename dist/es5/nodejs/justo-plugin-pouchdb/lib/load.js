"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 









op;var _pouchdb = require("pouchdb");var _pouchdb2 = _interopRequireDefault(_pouchdb);var _justoFs = require("justo-fs");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_pouchdb2.default.plugin(require("pouchdb-load"));function op(params, done) {
  var opts, remOpts;


  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};
  if (!opts.db) throw new Error("db expected.");
  if (!opts.src) throw new Error("src expected.");


  if (opts.username) remOpts = { auth: { username: opts.username, password: opts.password } };



  new _pouchdb2.default((
  opts.protocol || "http") + "://" + (opts.host || "localhost") + ":" + (opts.port || 5984) + "/" + opts.db, 
  remOpts).
  load(new _justoFs.File(opts.src).text).then(function () {
    done();}).
  catch(function (err) {
    done(err);});}