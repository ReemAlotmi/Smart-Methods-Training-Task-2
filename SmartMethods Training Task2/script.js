// new speech recognition object

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("جاري الإستماع، تحدث الأن");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    //var confidence = event.results[0][0].confidence;
};
              
// start recognition
recognition.start();


