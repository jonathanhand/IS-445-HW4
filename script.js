var xhttp = new XMLHttpRequest();

xhttp.open('GET','https://jsonplaceholder.typicode.com/users', true);

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const recData = JSON.parse(xhttp.responseText);
       // Typical action to be performed when the document is ready:
       var emailList = []
       for (property in recData) {
           emailList.push(recData[property].email);
           emailList.sort;
           console.log(emailList);
       }
       for (entry in emailList)
        document.getElementById("box1").innerHTML += emailList[entry] + '</br>';
    }
};
xhttp.send();
