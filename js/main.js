const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
function runCodeGoSequencial()
{

    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true ); 
        anHttpRequest.send( null ); 
        }
        }
        var theurl='http://localhost:9090/sequencial';
        var client = new HttpClient();
        client.get(theurl, function(response) { 
        var response1 = JSON.parse(response);
        // alert(response);
        document.getElementById("TimeToExecuteGo").innerHTML = response1.TimeToExecute + " Seconds"
        }); 
}

function runCodeGoParallel()
{

    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true ); 
        anHttpRequest.send( null ); 
        }
        }
        var theurl='http://localhost:9090/parallel';
        var client = new HttpClient();
        client.get(theurl, function(response) { 
        var response1 = JSON.parse(response);
        // alert(response);
        document.getElementById("TimeToExecuteGo").innerHTML = response1.TimeToExecute + " Seconds"
        }); 
}
function runCodePythonSequencial()
{

    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true ); 
        anHttpRequest.send( null ); 
        }
        }
        var theurl='http://localhost:9090/';
        var client = new HttpClient();
        client.get(theurl, function(response) { 
        var response1 = JSON.parse(response);
        // alert(response);
        document.getElementById("TimeToExecutePython").innerHTML = response1.TimeToExecute + " Seconds"
        }); 
}
function runCodePythonParallel()
{

    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true ); 
        anHttpRequest.send( null ); 
        }
        }
        var theurl='http://localhost:9090/';
        var client = new HttpClient();
        client.get(theurl, function(response) { 
        var response1 = JSON.parse(response);
        // alert(response);
        document.getElementById("TimeToExecutePython").innerHTML = response1.TimeToExecute + " Seconds"
        }); 
}