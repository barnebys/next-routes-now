const fs = require("fs");
const qs = require("querystring");
const path = require("path");

const args = process.argv.slice(2);

const build = (module.exports.build = async (routesPath, nowConfigPath) => {
  const nowConfig = !!nowConfigPath ? require(nowConfigPath) : {};
  const routesConfig = !!routesPath ? require(routesPath) : {};

  const routes = routesConfig.reduce((acc, route) => {
    if (route.build) {
      const routeConfigPath = path.dirname(nowConfigPath) + "/" + route.build;
      const data = require(routeConfigPath);
      if (!(data && data.routes)) {
        throw new Error("Invalid route file");
      }
      const routes = data.routes.map(route => {
        const query =
          route.keyNames.length > 0
            ? "?" +
              route.keyNames.map((name, i) => `${name}=$${i + 1}`).join("&")
            : "";
        return {
          src: route.regex.source,
          dest: route.page + query
        };
      });
      return acc.concat(routes);
    }
    return acc.concat([route]);
  }, []);

  nowConfig.routes = routes;

  return nowConfig;
  /*
  const data = require(routesPath);

  if (!(data && data.routes)) {
    throw new Error("Invalid route file");
  }

  const routes = data.routes.map(route => {
    const query =
      route.keyNames.length > 0
        ? "?" + route.keyNames.map((name, i) => `${name}=$${i + 1}`).join("&")
        : "";
    return {
      src: route.regex.source,
      dest: route.page + query
    };
  });

  nowConfig.routes = routes;

  return nowConfig;
  */
});

const buildAndUpdate = (module.exports.buildAndUpdate = async (
  routesPath,
  nowConfigPath
) => {
  const newNowConfig = await build(routesPath, nowConfigPath);

  return new Promise((resolve, reject) => {
    fs.writeFile(
      nowConfigPath,
      JSON.stringify(newNowConfig, null, "  "),
      err => {
        if (err) {
          return reject(err);
        }
        console.log(`Updated ${nowConfigPath}`);
        return resolve(newNowConfig);
      }
    );
  });
});
