const bcrypt = require("bcrypt");
const users = require("../data/users");
const saveData = require("../utils/saveData");

module.exports = {
  index(req, res, next) {
    res.json('Hello World');
  },

  listar(req, res, next) {
    res.json(users);
  },

  cadastrar(req, res, next) {
    let id = users.length + 1;
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let user = { id, ...req.body }
    users.push(user)

    saveData(users, "users.js");

    res.json('Usuário cadastrado');
  },

}