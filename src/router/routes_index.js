const router = require("express").Router();

const forumController = require("../controllers/forum/forum")
const userController = require("../controllers/Usuarios/usuariosController")
const loginController = require("../controllers/authentication/login")
const messaguesController = require("../controllers/messages/messages.controller")



router.get('/getAllForums', forumController.getForums)
router.post('/createForo', forumController.createForo)

/*users*/
router.post('/createUser', userController.createUser)
/*fin users*/

/*Logi*/
router.post('/login',loginController.LoginUser )
/*fin login user*/


/*Mesagges*/
router.post('/newMesagues',messaguesController.newMessagues )
/*fin Mesagges */


module.exports = router;
