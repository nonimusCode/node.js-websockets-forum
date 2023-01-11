const messagueController = require('./controllers/messages/messages.controller')

module.exports =  function (io) {
    io.on('connection' , socket =>{

        const id_user_socket = socket.id
        const { nameQuestion } = socket.handshake.query
        const { id_Question } = socket.handshake.query

        socket.join(nameQuestion)

        console.log(`New user ${id_user_socket} joined ${nameQuestion}`);

        socket.on('send email', data =>{
            const {message , username , img , hora_envio , user_id , forum_id} = data
            io.sockets.to(nameQuestion).emit('forward message' , {message , username , img , hora_envio});
            messagueController.newMessagueslocal({message ,hora_envio , user_id , forum_id })
        })

        socket.on("disconnect", () => {
            console.log('nos salimos de la reuinion men');
          });
      })
}