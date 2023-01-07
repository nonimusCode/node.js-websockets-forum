const modelUser = require("../../models/Users/users");
const estructuraApi = require("./../../helpers/estructuraApi");

exports.LoginUser = async (req , res) => {
  let api = new estructuraApi();
  const { body } = req;
  const { email, password } = body;
  //consult de user
  const user = await modelUser.findOne({
    where: { email },
  });

  const passwortCorrect = //use ternarias
    user === null //condition
      ? false //si es true
      : user.password == password //si es false
  /*second validate pasword if pasword */


  if (!(email && passwortCorrect)) {
    api.setEstado(
      401,
      "Error",
      "Contraseña O identificacion invalidas"
    );
  } else {
    api.setResultado({
        id_user : user.id_user,
        nameuser : user.name_user,
        photo : user.photo
    })
  }
  return res.json(api.toResponse());
};
