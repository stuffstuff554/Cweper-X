var Username = localStorage.getItem("Username");

function Check() {
    var jsonData = { "MSG": "Echeck", "Username" : localStorage.getItem("Username")};
    var ToConnect = "http://rxservice.duckdns.org/";

    fetch(ToConnect, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Processed String:', data.processed_string);

        if (data.processed_string == "NE") {
            alert("Sorry, you have no mail!");
        } else {
            alert("You have mail hit enter to continue.");
            alert(data.response);
            alert("Thats all!");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error communicating with the server.");
    });
}