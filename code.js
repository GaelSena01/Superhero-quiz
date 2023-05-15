onEvent("Startbutton", "click", function( ) {
  hideElement("Incorrect1a");
  hideElement("Incorrect");
  hideElement("Correct");
  hideElement("text_area3");
  setScreen("Question1");
  hideElement("Q2Incorrect1");
  hideElement("Q2Correct");
  hideElement("Q2Incorrect2");
  hideElement("Q2Incorrect3");
  hideElement("correct3a");
  hideElement("incorrect3b");
  hideElement("incorrect3d");
  hideElement("congratulations");
  hideElement("incorrect3c");
});
onEvent("homeButton1", "click", function( ) {
  setScreen("Homepage");
});
onEvent("button2", "click", function( ) {
  setScreen("question2");
});
onEvent("Q1A", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("Incorrect1a");
});
onEvent("Q1B", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("Incorrect");
});
onEvent("Q1C", "click", function( ) {
  playSound("assets/category_digital/coin_1.mp3", false);
  showElement("Correct");
});
onEvent("Q1D", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("text_area3");
});
onEvent("Q2A", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("Q2Incorrect1");
});
onEvent("Q2B", "click", function( ) {
  playSound("assets/category_digital/coin_1.mp3", false);
  showElement("Q2Correct");
});
onEvent("Q2C", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("Q2Incorrect2");
});
onEvent("Q2D", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("Q2Incorrect3");
});
onEvent("forward2", "click", function( ) {
  setScreen("question3");
});
onEvent("homeButton3", "click", function( ) {
  setScreen("Homepage");
});
onEvent("homeButton2", "click", function( ) {
  setScreen("Homepage");
});
onEvent("Q3A", "click", function( ) {
  playSound("assets/category_digital/coin_1.mp3", false);
  showElement("correct3a");
  showElement("congratulations");
});
onEvent("Q3B", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("incorrect3b");
});
onEvent("Q3C", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("incorrect3c");
});
onEvent("Q3D", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  showElement("incorrect3d");
});
onEvent("Q1C", "click", function( ) {
  onEvent("Q2B", "click", function( ) {
    onEvent("Q3A", "click", function( ) {
      setScreen("screen1");
    });
  });
});
