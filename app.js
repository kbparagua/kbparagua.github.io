window.onload = function(){
  var YEAR_STARTED = 2011;

  var yearsWorking = (new Date()).getFullYear() - YEAR_STARTED,
      el = document.getElementsByClassName('js-years')[0];

  el.innerHTML = yearsWorking;
}
