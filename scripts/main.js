var myImage = document.querySelector("img");
myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/hoop.jpg") {
        myImage.setAttribute ("src", "images/kobe.jpg");
    } else {
        myImage.setAttribute("src", "images/hoop.jpg");
    
    }
}
    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");
    function setUserName() {
        let myName = prompt("Введите ваше имя");
        if(!myName) {
            setUserName();
        } else {
            localStorage.setItem("name", myName);
        myHeading.innerHTML = 'Баскетбол,больше чем игра,' +myName;
            }
        }
    if (!localStorage.getItem('name')) {
        setUserName();
        } else {
            let storedName = localStorage.getItem("имя");
            myHeading.innerHTML = 'Баскетбол больше чем игра,'+storedName;
        }
        myButton.onclick = () => {
            setUserName();
        };
