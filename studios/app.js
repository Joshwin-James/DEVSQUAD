let participants = [];
let matchCounter = 0;

// Function to register for an event
function registerEvent(event, fee) {
    const name = prompt('Enter your name:');
    const email = prompt('Enter your email:');
    
    // Fill in user registration data
    const user = {
        name,
        email,
        event,
        fee,
    };

    participants.push(user);
    alert('You have successfully registered for ' + event);

    // Update payment amount on the form
    document.getElementById('payment').value = fee;

    // Display matches after registering
    generateMatches();
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const tournament = form.tournament.value;
    const payment = form.payment.value;

    const user = {
        name,
        email,
        tournament,
        payment,
    };

    participants.push(user);
    alert(`Registration Successful for ${tournament}`);
    form.reset();
    generateMatches();
}

// Function to generate match table
function generateMatches() {
    if (participants.length < 2) {
        document.getElementById('matches').innerHTML = '<p>Not enough participants for matches yet.</p>';
        return;
    }

    // Pair participants
    let matchups = [];
    for (let i = 0; i < participants.length; i += 2) {
        if (participants[i + 1]) {
            matchups.push([participants[i], participants[i + 1]]);
        }
    }

    // Display the match table
    let matchesHtml = '';
    matchups.forEach(match => {
        matchesHtml += `
            <div class="match">
                <h3>Match ${++matchCounter}</h3>
                <p>Player 1: ${match[0].name} vs Player 2: ${match[1].name}</p>
                <button onclick="contactPlayers(${match[0].name}, ${match[1].name})">Contact Players</button>
            </div>
        `;
    });

    document.getElementById('matches').innerHTML = matchesHtml;
}

// Function to contact players
function contactPlayers(player1, player2) {
    alert(`Contact ${player1} and ${player2} to arrange match details.`);
}
