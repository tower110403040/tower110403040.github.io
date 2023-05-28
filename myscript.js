alert("1 this is a alert")
alert("2 this is \nsecond alert")
function myfunction(){
    document.getElementById("hi").innerHTML = "fuck you.";}
document.write(3+11);
function game(){
    var msg;
    if (confirm("are you ready")){
        msg= "you win";
    }
    else{
        msg="you lose"
    }
    document.getElementById("hii").innerHTML=msg;
}

function question(){
    var msg1;
    var username=prompt("enter your name","tower");
    if (username==null||username==""){
        msg1="invalid input";
    }
    else{
        msg1="hi"+username+" welcome aborad";       
    }
    document.getElementsById("input").innerHTML=msg1;
}