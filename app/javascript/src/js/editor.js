import moment from 'moment';
import Pickr from '@simonwep/pickr';

let countdownForm = document.getElementById("new_countdown")
let initCountdownForm = function(form) {
  let header = document.getElementById("header")
  let preview = document.getElementById("color-selector-preview")
  let titleField = document.getElementById("countdown_title")
  let colorField = document.getElementById("countdown_color")
  let previewCountdown = document.querySelector(".countdown")
  let previewCounts = previewCountdown.querySelectorAll(".count")
  let previewText = document.getElementById("preview-text")

  const pickr = Pickr.create({
    el: "#color-selector-trigger",
    theme: 'nano',
    lockOpacity: true,
    useAsButton: true,

    default: '#' + colorField.value,
    // showAlways: true,
    components: {
      // Main components
      preview: true,
      opacity: false,
      hue: true,

      // Input / output Options
      interaction: {
        hex: false,
        rgba: false,
        hsla: false,
        hsva: false,
        cmyk: false,
        input: true,
        clear: false,
        save: true
      }
    },
    strings: {
      save: "Close"
    }
  })

  let setPreviewText = function(){
    previewText.innerHTML = titleField.value;
  }

  titleField.onkeydown = setPreviewText;

  pickr.on('change', (color, instance) =>{
    var value = color.toHEXA().join("");
    var hex = "#" + value;

    colorField.value = value;
    preview.style.backgroundColor = hex;
    header.style.backgroundColor = hex;

    previewCounts.forEach(function(count){
      count.style.backgroundColor = hex;
    })
  })

  pickr.on('save', (color, instance) => {
    pickr.hide();
  })

  let initTimePicker = function(){
    let monthField = document.getElementById("target_month")
    let dayField = document.getElementById("target_day")
    let yearField = document.getElementById("target_year")
    let hourSelect = document.getElementById("target_hour")
    let minuteSelect = document.getElementById("target_minute")
    let periodSelect = document.getElementById("target_period")
    let fieldset = [monthField, dayField, yearField, hourSelect, minuteSelect, periodSelect]
    let valueField = document.getElementById("countdown_target_time")

    let getValue = function(){
      var value = monthField.value + " " + dayField.value + " " + yearField.value + " " +
                  hourSelect.options[hourSelect.selectedIndex].value + " " +
                  minuteSelect.options[minuteSelect.selectedIndex].value + " " +
                  periodSelect.options[periodSelect.selectedIndex].value;

      // return moment(value, "MM DD YYYY hh mm A").utc().toString();
      return moment(value, "MM DD YYYY hh mm A").format();
    }

    let setValue = function(){
      valueField.value = getValue();
      return true
    }

    fieldset.forEach(function(el){
      el.onchange = setValue;
    });

    setValue();
  }
  initTimePicker();
}

if (countdownForm !== null)
  initCountdownForm(countdownForm);
