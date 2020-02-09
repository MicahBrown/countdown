import ClipboardJS from 'clipboard';
import moment from 'moment';

class Countdown {
  constructor (countdown) {
    this.countdown = countdown;
    this.display = countdown.querySelector(".target-time")

    clearInterval()
  }

  clearInterval () {
    this.interval = null;
  }

  to (targetDate) {
    let that = this;

    this.interval = setInterval(function(){
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = targetDate - now;

      // If the count down is finished, write some text
      if (distance < 0) {
        that.setTime(0)
        clearInterval(that.interval)
      } else {
        that.setTime(distance)
      }
    }, 500)
  }

  setTime (distance) {
    // Time calculations for days, hours, minutes and seconds
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    let days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
    if (this.countdown.querySelectorAll("[data-period='years']").length > 0) {
      this.countdown.querySelector("[data-period='years'] > span").innerHTML = years
    }

    this.countdown.querySelector("[data-period='days'] > span").innerHTML = days
    this.countdown.querySelector("[data-period='hours'] > span").innerHTML = hours
    this.countdown.querySelector("[data-period='minutes'] > span").innerHTML = minutes
    this.countdown.querySelector("[data-period='seconds'] > span").innerHTML = seconds
  }
}

let countdown = document.querySelector(".countdown");
let copyButton = document.querySelector(".copy-button");

if (countdown !== null) {
  let cd = new Countdown(countdown)
  let date = new Date(countdown.dataset.countdown)

  cd.to(date)
}

if (copyButton !== null) {
  new ClipboardJS(copyButton);
}