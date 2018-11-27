#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const nextRoutesFile = path.resolve(process.cwd(), args[0]);
const nowConfigFile = path.resolve(process.cwd(), args[1]);

const nextRoutes = require(nextRoutesFile);
const nowConfig = require(nowConfigFile);

if (!nowConfig.routes) {
  nowConfig.routes = [];
}

nextRoutes.routes.forEach(route => {
  if (nowConfig.routes.filter(e => e.src === route.regex.source).length === 0) {
    nowConfig.routes.push({
      src: route.regex.source,
      dest: route.page
    });
  }
});

fs.writeFile(nowConfigFile, JSON.stringify(nowConfig, false, 2), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("now.json has been updated");
});
