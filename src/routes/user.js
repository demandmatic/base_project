const userController = require('../controllers/user')

module.exports = [
    {
        method: 'GET',
        path: '/user',
        handler: userController.query
    },
    {
        method: 'POST',
        path: '/user/add',
        handler: userController.add
    },
    {
        method: 'GET',
        path: '/user/{id}',
        handler: userController.get
    },
    {
        method: 'DELETE',
        path: '/user',
        handler: userController.remove
    }
]