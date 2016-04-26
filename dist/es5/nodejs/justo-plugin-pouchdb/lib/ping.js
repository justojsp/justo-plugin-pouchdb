"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 





op;var _pouchdb = require("pouchdb");var _pouchdb2 = _interopRequireDefault(_pouchdb);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params, done) {
  var opts, auth, cx;


  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};


  cx = new _pouchdb2.default((opts.protocol || "http") + "://" + (opts.host || "localhost") + ":" + (opts.port || 5984) + "/" + opts.db);


  cx.info(function (error, res) {
    done(undefined, !error);});}