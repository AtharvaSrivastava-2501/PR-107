function start_identification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Gf02MCrbz/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresult);
}

function gotresult(error,result){
    
}