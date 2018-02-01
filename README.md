# rest-api-fetcher

Usage example:
```javascript
var rest_api_fetcher = require('rest-api-fetcher')

var codejquery = rest_api_fetcher.createRoute('http://code.jquery.com', ['jquery-3.3.1.js'])
codejquery.get()

var routes = [
    'posts',
    'comments'
]

var api = rest_api_fetcher.createRoutes('https://jsonplaceholder.typicode.com', routes)

// .get(id, subroute, query)

api.posts.get()
api.comments.get()

api.posts.get(1)
api.posts.get(1, 'comments')

api.comments.get(null, null, { postId: 1 })

```
