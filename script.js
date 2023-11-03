// Function to speak a welcome message
function speakWelcomeMessage() {
    speak("Welcome to my biography website");
  }
  
  // Function to use Speech Synthesis
  function speak(text) {
    const voice = new SpeechSynthesisUtterance();
    voice.text = text;
    speechSynthesis.speak(voice);
  }
  
  // Speak the welcome message when the script is executed
  speakWelcomeMessage();
  