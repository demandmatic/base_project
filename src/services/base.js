const Config = require('../config/setting')

class BaseService {

    constructor(_model) {
        this.model = _model
    }

    useModel(_model) {
        this.model = _model
    }

    removeByID(ID) {
        return this.model.remove({ _id: ID })
    }

    add(data) {
        let obj = new this.model(data)
        return obj.save()
    }

    findById(ID) {
        return this.model.findById(ID)
    }

    findFirstOne(condition = {}, sort) {
        let results = this.model.find(condition)
        if (sort) {
            results.sort(sort)
        }
        return results.limit(1)
    }

    update(condition, data) {
        return this.model.update(condition, data)
    }

    query(condition, option) {
        return this.model.find(condition).exec()
    }

    query(condition = {}, option = {}) {
        const sort = option.sort || {}
        let results = this.model.find(condition)
        if (option.sort) {
            results.sort(option.sort)
        }
        if (option.limit) {
            results.limit(option.limit)
        } else {
            results.limit(Config.get('limitPerPage'))
        }
        if (option.select) {
            results.select(option.select)
        }
        if (option.skip) {
            var limit = option.limit || Config.get('limitPerPage')
            results.skip(limit * option.skip)
        }
        return results.exec()
    }
}

module.exports = BaseService