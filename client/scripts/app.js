// YOUR CODE HERE:
// url to hit: http://parse.rtp05.hackreactor.com/chatterbox/classes/messages
let message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

const app = {
  server: 'http://parse.rpt.hackreactor.com/chatterbox/classes/messages',
};

app.init = () => {

};

app.send = (message) => {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: (data) => {
      console.log('chatterbox: Message sent', data);
    },
    error: (data) => {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = () => {

  $.ajax({
    url: app.server,
    type: 'GET',
    contentType: 'application/json',
    data: {order: '-createdAt'},
    success: (data) => {
      console.log('chatterbox: Message received', data);
    },
    error: (data) => {
      console.error('chatterbox: Failed to get message', data);
    }
  });
};

// should be able to clear messages from the DOM
app.clearMessages = () => {
  $('#chats').remove();
};



// should be able to add messages to the DOM
app.renderMessage = (message) => {
  console.log('renderMessage: ', JSON.stringify(message));
  let listElements = `<span class="chat">
                        <p class="username">${message.username}</p>
                        <p class="message">${message.text}</p>
                      </span>`;
  $('#chats').prepend(listElements);
};

// should be able to add rooms to the DOM
app.renderRoom = (room) => {
  //$('#roomSelect').
};

// should add a friend upon clicking their username
app.handleUsernameClick = (username) => {

};

// should send a message upon clicking submit
app.handleSubmit = () => {

};

console.log('calling fetch... ', app.fetch());

