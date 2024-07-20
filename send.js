// Don't copy file copy code.

var ToConnect = "http://rxservice.duckdns.org/";

fetch(ToConnect, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: jsonData,
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