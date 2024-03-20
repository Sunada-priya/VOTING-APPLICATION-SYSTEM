document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const voteValue = formData.get('vote');

    fetch('https://tyda8bk4al.execute-api.us-east-1.amazonaws.com/test', {
        method: 'POST',
        body: JSON.stringify({ vote: voteValue }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('results').innerText = `Option 1: ${data.option1}, Option 2: ${data.option2}`;
    })
    .catch(error => console.error('Error:', error));
});
