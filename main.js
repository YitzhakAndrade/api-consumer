apiconsumer = require('./index.js')

codejquery = apiconsumer.createRoute('http://code.jquery.com', ['jquery-3.3.1.js'])
codejquery.get()

var routes = [
    'posts',
    'comments'
]

api = apiconsumer.createRoutes('https://jsonplaceholder.typicode.com', routes)

// .get(id, subroute, query)

api.posts.get()
api.comments.get()

api.posts.get(1)
api.posts.get(1, 'comments')

api.comments.get(null, null, { postId: 1 })
