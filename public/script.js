document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;

    fetch(`/search?departure=${departure}&arrival=${arrival}&date=${date}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<h2>Available Flights</h2>';
            data.flights.forEach(flight => {
                resultsDiv.innerHTML += `<p>${flight.flightNumber} - ${flight.departureCity} to ${flight.arrivalCity} on ${flight.date} - $${flight.price}</p>`;
            });
        });
});
