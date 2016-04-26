"use strict";
var _justo = require("justo");


var NS = "org.justojs.plugin";
var dump, installServer, load, ping, startServer, uninstallServer;


module.exports = { 
  get dump() {
    if (!dump) dump = (0, _justo.simple)({ ns: NS, name: "dump" }, require("./lib/dump").default);
    return dump;}, 


  get installServer() {
    if (!installServer) installServer = (0, _justo.simple)({ ns: NS, name: "installServer" }, require("./lib/installServer").default);
    return installServer;}, 


  get load() {
    if (!load) load = (0, _justo.simple)({ ns: NS, name: "load" }, require("./lib/load").default);
    return load;}, 


  get ping() {
    if (!ping) ping = (0, _justo.simple)({ ns: NS, name: "ping" }, require("./lib/ping").default);
    return ping;}, 


  get startServer() {
    if (!startServer) startServer = (0, _justo.simple)({ ns: NS, name: "startServer" }, require("./lib/startServer").default);
    return startServer;}, 


  get uninstallServer() {
    if (!uninstallServer) uninstallServer = (0, _justo.simple)({ ns: NS, name: "uninstallServer" }, require("./lib/uninstallServer").default);
    return uninstallServer;} };