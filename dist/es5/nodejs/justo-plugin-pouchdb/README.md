[![Build Status](https://travis-ci.org/justojsp/justo-plugin-pouchdb.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-pouchdb)
[![Dependency Status](https://david-dm.org/justojsp/justo-plugin-pouchdb.svg)](https://david-dm.org/justojsp/justo-plugin-pouchdb)
[![devDependency Status](https://david-dm.org/justojsp/justo-plugin-pouchdb/dev-status.svg)](https://david-dm.org/justojsp/justo-plugin-pouchdb#info=devDependencies)

Plugin for *PouchDB* and *PouchDB Server*.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-pouchdb
```

## Use

```
const pouchdb = require("justo-plugin-pouchdb");
```

## Tasks


This plugin is composite.

### installServer task

Install *PouchDB Server* globally:

```
installServer(opts : object, config ?: object)
```

The `config` parameter:

- `version` (string). The version to install. Default: `*`.
- `output` (boolean). Show the output. Default: `true`.

Example:

```
pouchdb.installServer("Install PouchDB Server", {version: "1.1.1"});
```

### uninstallServer task

Uninstall *PouchDB Server* globally:

```
uninstallServer(opts : object, config ?: object) : boolean
```

The `config` parameter:

- `output` (boolean). Show the output. Default: `true`.

Example:

```
pouchdb.uninstallServer("Uninstall PouchDB Server");
```

### startServer task

Start the *PouchDB Server*:

```
startServer(opts : object, config ?: object) : boolean
```

The `config` parameter:

- `host` (string). The hostname. Default: `localhost`.
- `port` (number). The port number. Default: `5984`.
- `dir` (string). The data directory.
- `config` (string). The configuration file path.
- `log` (boolean). If log must be generated. Default: `true`.
- `pidFile` (string). The PID file path. Default: none.
- `type` (string). The *PouchDB Server* type:
  - `in-memory`. In-memory database server.
  - `disk`. In disk database server. Default.
  - `backend`. Database server talks to another server.
  - `proxy`. Database server proxies to another host.
- `disk` (string). If `type=disk`, the storage engine: `SQLite` or `LevelDOWN`. Default: `LevelDOWN`.
- `backend` (string). If `type=backend`, the backend. For example: `memdown`, `riakdown`, `redisdown`, etc.
- `proxy` (string). If `type=proxy`, the host to proxy the requests.
- `wd` (string). Working dir. Default: `.`.

Example:

```
pouchdb.startServer("Start PouchDB Server", {
  host: "localhost",
  port: 5984,
  dir: "/opt/pouchdb-server/data",
  config: "/opt/pouchdb-server/pouchdb-server.json",
  type: "disk",
  disk: "LevelDOWN",
  log: true,
  pidFile: "/opt/pouchdb-server/pouchdb-server.pid",
  wd: "/opt/pouchdb-server/"
});
```

### ping task

Ping a *PouchDB/CouchDB server*:

```
ping(opts : object, config : object) : boolean
```

The `config` parameter:

- `protocol` (string). The protocol to use: `http` or `https`. Default: `http`.
- `host` (string). The host. Default: `localhost`.
- `port` (number). The port number. Default: `5984`.
- `db` (string). The database name.
- `username` (string). The username.
- `password` (string). The user password.

### dump task

Dump a *PouchDB/CouchDB server* database:

```
dump(opts : object, config : object) : boolean
```

The `config` parameter:

- `protocol` (string). The protocol to use: `http` or `https`. Default: `http`.
- `host` (string). The host. Default: `localhost`.
- `port` (number). The port number. Default: `5984`.
- `db` (string). The database name.
- `dst` (string). The dump file.
- `username` (string). The username.
- `password` (string). The user password.

Example:

```
pouchdb.dump("Dump test database", {
  protocol: "https",
  host: "localhost",
  port: 5984,
  db: "test",
  dst: "/opt/pouchdb-server/dump/test.dmp"
})
```

### load task

Load a database dump into a database:

```
load(opts : object, config : object) : boolean
```

The `config` parameter:

- `protocol` (string). The protocol to use: `http` or `https`. Default: `http`.
- `host` (string). The host. Default: `localhost`.
- `port` (number). The port number. Default: `5984`.
- `db` (string). The database name.
- `src` (string). The dump file.
- `username` (string). The username.
- `password` (string). The user password.

Example:

```
pouchdb.load("Load test database", {
  protocol: "https",
  host: "localhost",
  port: 5984,
  db: "test",
  src: "/opt/pouchdb-server/dump/test.dmp"
})
```
