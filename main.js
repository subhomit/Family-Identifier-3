Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("cam_output").innerHTML = "<img id = 'img_output' src = '" + data_uri +"'>";
    });
}
console.log("ml5version : ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5cRjXLiK5/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function compare(){
    image = document.getElementById("img_output");
    classifier.classify(image, got_result);
}
function got_result(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(2);
    }
}