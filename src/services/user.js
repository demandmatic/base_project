let BaseService = require('./base'),
    userModel = require('../models/user')

class UserService extends BaseService {
    constructor(model) {
        super(model)
    }
}

module.exports = new UserService(userModel)
module.exports.UserService = UserService
