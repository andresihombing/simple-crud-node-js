'use strict'

module.exports = function(app){
    var todoList = require('./controllers/controller');

    app.route('/').get(todoList.index);
    app.route('/users').get(todoList.users)
    app.route('/users/:user_id').get(todoList.findUsers)
    app.route('/users').post(todoList.createUsers)
    app.route('/users').put(todoList.updateUsers)
    app.route('/users/:user_id').delete(todoList.deleteUsers)
}