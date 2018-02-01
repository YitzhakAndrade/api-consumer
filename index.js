var core = require('./core')

function createRoute(url, routeName) {
    return {
        get: function (id, subroute, query) {
            var urlTemp = url
            var queryStr = core.mountQueryStr(query)
            var urlArr = [ routeName, id, subroute ]
            urlArr.forEach(function(e) {
                if (e) urlTemp += '/' + e
            })
            urlTemp += queryStr
            return core.get(urlTemp)
        }
    }
}

function createRoutes(url, routesNames) {
    var routes = {}
    routesNames.forEach(function(val, ix, arr) {
        routes[val] = createRoute(url, val)
    })
    return routes
}

module.exports = {
    createRoutes: createRoutes,
    createRoute: createRoute
}
