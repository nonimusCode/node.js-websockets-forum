$(function () {
    const socket = io()
    //obtengo el dom de la interfaz
    const $messageForm = $('#message-form')
    const $messageBox = $('#message')
    const $chat = $('#chat')
    //eventos 
    $messageForm.submit(e => {
        e.preventDefault()
        socket.emit('send email', $messageBox.val())
        $messageBox.val('')
    })

    socket.on('forward message', data => {
        $chat.append(
            `<div class="card">
                <div class="card-header">
                <b>${data.username}</b> <img src="${data.img}"></img>
                </div>
                <div id="chat" class="card-body">
                    <p>${data.message}</p>
                </div>
            </div>`
        )
    })

    socket.on('disconnect', function () {
        console.log('me dedsconecte del sockket wiiii ');
    })
})