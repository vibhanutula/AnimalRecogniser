function startClassifcation() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UPwgwfrLf/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.log(error);
    }
    else{
        console.log(results);

        randomShadeRed = Math.floor(Math.random() * 255) + 1;
        randomShadeGreen = Math.floor(Math.random() * 255) + 1;
        randomShadeBlue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("Hearinggg").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("Accuracy").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + " %";

        document.getElementById("Hearinggg").style.color = "rgb(" + randomShadeRed + ", " + randomShadeGreen + ", " + randomShadeBlue + ")";
        document.getElementById("Accuracy").style.color = "rgb(" + randomShadeRed + ", " + randomShadeGreen + ", " + randomShadeBlue + ")";

        ImageAni = document.getElementById("AnimalImg");

        if(results[0] == "Mewing"){
            ImageAni.src = "Cat.gif";
        }

        else if(results[0] == "Barking"){
            ImageAni.src = "Dog.gif";
        }

        else if(results[0] == "Mooing"){
            ImageAni.src = "Cow.gif";
        }

        else if(results[0] == "Roar"){
            ImageAni.src = "Lion.gif";
        }

        else if(results[0] == "Neighing") {
            ImageAni.src = "Horse.gif";
        }

        else{
            ImageAni.src = "Ear.png";
        }
    }
}