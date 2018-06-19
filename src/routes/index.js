const _ = require('lodash')
const userRoutes = require('./user')
const homeRoutes = [
    {
        method: 'GET',
        path: '/hello',
        handler: function (request, h) {
            console.log("It's work")
            return 'hello world';
        }
    }
]

let routes = _.concat(homeRoutes, userRoutes)
module.exports = routes
