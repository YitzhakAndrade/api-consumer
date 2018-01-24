var request = require('request-promise')

module.exports = {
    get: function(url) {
        return request(url)
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
