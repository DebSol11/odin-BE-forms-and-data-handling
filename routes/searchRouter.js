const {Router} = require("express");
const usersController = require("../controllers/usersController");
const searchRouter = Router();

searchRouter.get("/search", usersController.searchUsersGet);

module.exports = searchRouter;