// Basic SSE connection
const eventSource = new EventSource('http://localhost:8080/events');

// Handle regular messages
eventSource.onmessage = (event) => {
    console.log('Received message:', event.data);
    document.getElementById('messages').innerHTML += `<p>${event.data}</p>`;
};

// Handle named events
eventSource.addEventListener('welcome', (event) => {
    console.log(event.data);
});

// Handle connection open
eventSource.onopen = () => {
    console.log('Connection opened!');
};

// Handle errors
eventSource.onerror = (error) => {
    console.log('Error occurred:', error);
};

// To close connection when needed
function closeConnection() {
    eventSource.close();
}
