## Usage

To install the latest version of Next Routes for Now CLI, run this command:

```
npm install -g next-routes-now
```

## Generate routes

```
generate-now-routes <routes.js> [-A <now.json>]
```

### Usage

```
Description

Usage
  $ generate-now-routes <routes_file> [options]

Options
  --help, -h          Display this message
  --version, -v       Display version
  --local-config, -A  Path to the local \`now.json\` file
```

### Can also be used programatically

```
const generate = require("next-routes-now")

genaret.buildAndUpdate(pathToRoutes, pathToNow);
```
