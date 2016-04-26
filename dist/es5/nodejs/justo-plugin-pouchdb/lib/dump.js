"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 












op;var _pouchdb = require("pouchdb");var _pouchdb2 = _interopRequireDefault(_pouchdb);var _pouchdbReplicationStream = require("pouchdb-replication-stream");var _pouchdbReplicationStream2 = _interopRequireDefault(_pouchdbReplicationStream);var _memorystream = require("memorystream");var _memorystream2 = _interopRequireDefault(_memorystream);var _justoFs = require("justo-fs");var fs = _interopRequireWildcard(_justoFs);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_pouchdb2.default.plugin(_pouchdbReplicationStream2.default.plugin);_pouchdb2.default.adapter("writableStream", _pouchdbReplicationStream2.default.adapters.writableStream);function op(params, done) {
  var opts, remOpts, stream, dump = "";


  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};
  if (!opts.db) throw new Error("db expected.");
  if (!opts.dst) throw new Error("dst expected.");


  if (opts.username) remOpts = { auth: { username: opts.username, password: opts.password } };


  stream = new _memorystream2.default();

  stream.on('data', function (chunk) {
    dump += chunk.toString();});


  new _pouchdb2.default((
  opts.protocol || "http") + "://" + (opts.host || "localhost") + ":" + (opts.port || 5984) + "/" + opts.db, 
  remOpts).
  dump(stream).then(function () {
    new fs.File(opts.dst).text = dump;
    done();}).
  catch(function (err) {
    done(err);});}