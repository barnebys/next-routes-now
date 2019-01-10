const routes = (module.exports = require("next-routes")());

/**
 * @method routes.add
 *
 * @param {String} name name for the route
 * @param {String} path web url for the route
 * @param {String} page next page to render
 */
routes.add("simple_route", "/simple/route", "/simple");
routes.add("complex_route", "/complex/:route", "/complex");
routes.add("multi_complex_route", "/multi/:id/:slug?", "/multi");
