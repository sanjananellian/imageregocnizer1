Webcam.set({
    width:350,
    height:360,
    image_format:"jpg",
jpg_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function takepic(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='img' src="+data_uri+">"
    })
}
console.log("ml5 version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nO2sVzKcq/model.json",modelloaded)
function modelloaded(){
    console.log("model is loaded")
}