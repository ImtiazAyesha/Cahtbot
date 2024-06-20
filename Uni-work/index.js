document.getElementById('send-btn').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    addMessageToChat('user-message', userInput);
    document.getElementById('user-input').value = '';

    // Here you would typically send the user's message to the server and get a response
    // For demonstration, we will just echo the user's message with a bot prefix
    setTimeout(() => {
        const botResponse = `Bot: ${userInput}`;
        addMessageToChat('bot-message', botResponse);
    }, 1000);
}

function addMessageToChat(messageType, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${messageType}`;
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
