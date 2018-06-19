let BaseService = require('./base'),
    userModel = require('../models/user')

class JobService extends BaseService {
    constructor(model) {
        super(model)
    }
}

module.exports = new JobService(userModel)
module.exports.JobService = JobService