const messagueController = require('./controllers/messages/messages.controller')

module.exports =  function (io) {
    io.on('connection' , socket =>{


        const id_user_socket = socket.id
        const { nameQuestion } = socket.handshake.query
        const { id_Question } = socket.handshake.query

        socket.join(nameQuestion)

        console.log(`New user ${id_user_socket} joined ${nameQuestion}`);

        socket.on('send email', data =>{
            console.log(data);
            io.sockets.to(nameQuestion).emit('forward message' , data);
            messagueController.newMessagues()
        })

        socket.on("disconnect", () => {
            console.log('nos salimos de la reuinion men ');
          });
      })
}