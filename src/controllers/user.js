let userService = require('../services/user')

let userController = {}

userController.add = (req, h) => {
    // data = req.payload
    return userService.add({
        firstName: "Tuan",
        lastName: "Vo",
        email: "demandmatic@gmail.com"
    })
}

userController.get = (req, h) => {
    const userID = req.params.id
    return userService.findById(userID)
}

userController.query = (req, h) => {
    const condition = req.payload;
    return userService.query(condition)
}

userController.remove = (req, h) => {
    let ID = req.payload.ID;
    return userService.removeByID(ID)
}

module.exports = userController