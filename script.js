const greet = () => {
    let userText = document.getElementById("text").value;

    if (userText === "") {
        document.getElementById("heading").innerText = "Hello!";
    } else {
        document.getElementById("heading").innerText = "Hello, " + userText + "!";
    }
};

const changeColor = (colour) => {
    let element = document.getElementById(colour)
    element.style.backgroundColor = colour;
    if(colour == "yellow"){
        element.style.color = "black";
    }else{
    element.style.color="white";
    }
};