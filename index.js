//imports
import {simple} from "justo";

//internal data
const NS = "org.justojs.plugin";
var dump, installServer, load, ping, startServer, uninstallServer;

//api
module.exports = {
  get dump() {
    if (!dump) dump = simple({ns: NS, name: "dump"}, require("./lib/dump").default);
    return dump;
  },

  get installServer() {
    if (!installServer) installServer = simple({ns: NS, name: "installServer"}, require("./lib/installServer").default);
    return installServer;
  },

  get load() {
    if (!load) load = simple({ns: NS, name: "load"}, require("./lib/load").default);
    return load;
  },

  get ping() {
    if (!ping) ping = simple({ns: NS, name: "ping"}, require("./lib/ping").default);
    return ping;
  },

  get startServer() {
    if (!startServer) startServer = simple({ns: NS, name: "startServer"}, require("./lib/startServer").default);
    return startServer;
  },

  get uninstallServer() {
    if (!uninstallServer) uninstallServer = simple({ns: NS, name: "uninstallServer"}, require("./lib/uninstallServer").default);
    return uninstallServer;
  }
};
