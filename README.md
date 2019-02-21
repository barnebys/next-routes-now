## Usage

To install the latest version of Next Routes for Now CLI, run this command:

```
npm install -g next-routes-now
```

## Generate routes

```
generate-now-routes <routes.json> [-A <now.json>]
```

### Usage

```
Description

Usage
  $ generate-now-routes <routes_file> [options]

Options
  --help, -h          Display this message
  --version, -v       Display version
  --local-config, -A  Path to the local `now.json` file
```

### Routes config json example

Define your Now 2 rules in routes.json. To build your next-routes use the `build`
key to compose your next-routes into your now.json.

```
[
  {
    "src": "/_next/static/(.*)",
    "dest": "/_next/static/$1",
    "headers": { "cache-control": "s-maxage=86400" }
  },
  {
    "build": "routes.js"
  }
]
```

### Can also be used programatically

```
const generate = require("next-routes-now")

genaret.buildAndUpdate(pathToRoutes, pathToNow);
```
