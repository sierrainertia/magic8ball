var eightball = document.querySelector("#eight-ball");
var eight = document.querySelector("#eight");

var randomNumber = Math.floor(Math.random() * 8);

var answer = "";

//record answer
function getAnswer() {
  randomNumber = Math.floor(Math.random() * 16);

  switch (randomNumber) {
    case 0:
      answer = "It is certain";

      break;

    case 1:
      answer = "It is decidedly so";

      break;

    case 3:
      answer = "Reply hazy try again";

      break;

    case 4:
      answer = "Cannot predict now";

      break;

    case 5:
      answer = "Do not count on it";

      break;

    case 6:
      answer = "My sources say no";

      break;

    case 7:
      answer = "Outlook not so good";

      break;

    case 8:
      answer = "Signs point to yes";

      break;

    case 9:
      answer = "Ask again later";

    case 10:
      answer = "Most likely";

    case 11:
      answer = "Very doubtful";

    case 12:
      answer = "Without a doubt";

    case 13:
      answer = "Yes";

    case 14:
      answer = "Yes - Definitely";

    case 15:
      answer = "You may rely on it";

    case 16:
      answer = "My sources say no";

    //display answer
  }
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
