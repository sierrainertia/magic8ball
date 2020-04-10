var eightball = document.querySelector("#eight-ball");
var eight = document.querySelector("#eight");

var answerList = [
  "It is certain",
  "It is decidedly so",
  "Reply hazy try again",
  "Cannot predict now",
  "Do not count on it",
  "My sources say no",
  "Outlook not so good",
  "Signs point to yes",
  "Ask again later",
  "Most likely",
  "Very doubtful",
  "Without a doubt",
  "Yes",
  "Yes - Definitely",
  "You may rely on it",
  "My sources say no"
];

var answer = "";

var randomNumber = Math.floor(Math.random() * answerList.length);

//record answer
function getAnswer() {
  randomNumber = Math.floor(Math.random() * answerList.length);
  answer = answerList[randomNumber];
}
// This shakes the ball on click
eightball.addEventListener("click", function() {
  eightball.classList.add("shaking");

  setTimeout(function() {
    eightball.classList.remove("shaking");
  }, 2000);

  // This fades the 8 on click
  eight.classList.add("fade");

  // after 1.5 seconds, replace 8 with the answer
  setTimeout(function() {
    getAnswer();
    eight.innerHTML = answer;
    //fade back in
    eight.classList.remove("fade");
    //add class small to make font small
    eight.classList.add("small");
  }, 1500);
});
