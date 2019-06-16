## Usage

To install the latest version of Next Routes for Now CLI, run this command:

```bash
npm install -g next-routes-now
# or
yarn global add next-routes-now
```

Or install locally:
```bash
npm install next-routes-now
# or
yarn add next-routes-now
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

```json
[
  {
    "src": "/_next/static/(.*)",
    "dest": "/_next/static/$1",
    "headers": { "cache-control": "s-maxage=86400" },
    "continue": true
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

### With prefix

If you files are not located at the root of your project, say in a monorepo, you can use the `prefix` key:

```json
[
  {
    "build": "routes.js",
    "prefix": "/packages/web"
  }
]
```
