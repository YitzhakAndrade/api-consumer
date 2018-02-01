var $ = require('jquery')

module.exports = {
    get: function(url) {
        return $.get(url)
    },
    mountQueryStr: function (query) {
        var parameters = []
        for (attr in query)
            parameters.push(attr + '=' + query[attr])
        if (parameters.length == 0) return ''
        var queryStr = '?' + parameters.join('&')
        return queryStr
    }
}
