import ClipboardJS from 'clipboard';
import moment from 'moment';

var countdown = document.querySelector(".countdown")

var initializeCountdown = function(countdown) {
  new ClipboardJS('.copy-button');

  var countDownDate = new Date(countdown.dataset.countdown);
  var targetDisplay = countdown.querySelector(".target-time");

  if (targetDisplay !== null)
    targetDisplay.innerHTML = moment(countDownDate).format("MMM DD, YYYY h:mm A ZZ");

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
    if (countdown.querySelectorAll("[data-period='years']").length > 0) {
      countdown.querySelector("[data-period='years'] > span").innerHTML = years
    }

    countdown.querySelector("[data-period='days'] > span").innerHTML = days
    countdown.querySelector("[data-period='hours'] > span").innerHTML = hours
    countdown.querySelector("[data-period='minutes'] > span").innerHTML = minutes
    countdown.querySelector("[data-period='seconds'] > span").innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      // document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 500);
}

if (countdown !== null)
    initializeCountdown(countdown);