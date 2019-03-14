loadDoc("https://jsonplaceholder.typicode.com/users", emailSplit)
function loadDoc(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
    }
};
xhttp.open("GET", url, true);
xhttp.send();
}

function emailSplit(xhttp) {
    const recData = JSON.parse(xhttp.responseText);
    var emailList = [];
    for (property in recData) {
        emailList.push(recData[property].email);
        emailList.sort;
    }
    for (entry in emailList) {
    document.getElementById("box1").innerHTML += emailList[entry] + '</br>';
}
}
    /*
    var emailList = []
       for (property in recData) {
           emailList.push(recData[property].email);
           emailList.sort;
           console.log(emailList);
       }
       for (entry in emailList) {
        document.getElementById("box1").innerHTML = xttp.responseText;//+= emailList[entry] + '</br>';
    }
}
*/
/*
//fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    })
*/