function Send() {
    var textboxValue = document.getElementById("ToSend").value;
    var SendTo = prompt("Enter the username of the person you would like to send this message to.");
    var Topic = prompt("Whats the topic?");

    alert("Hit OK to continue with the operation.");

    var ToConnect = "http://rxservice.duckdns.org/";

    var jsonData = {
        "MSG" : "Email",
        "From" : localStorage.getItem("Username"),
        "To" : SendTo,
        "Context" : Topic,
        "Content" : textboxValue
    };

    fetch(ToConnect, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData, // Assuming jsonData is defined somewhere in your code
    })
    .then(response => response.json())
    .then(data => {
        console.log('Processed String:', data.processed_string);

        if (data.processed_string === "Done") {
            alert("We heard back from our server! Your account has been created. Have fun!");
        } else {
            alert("Our servers got blocked or are currently down. Please wait for an announcement (Current server ping: rxservice.zapto.org) or try again later.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error communicating with the server.");
    });
}
