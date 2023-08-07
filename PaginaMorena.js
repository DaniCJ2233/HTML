window.addEventListener('scroll', revealText);

function revealText() {
  var hiddenText = document.querySelector('.hidden-text');
  var hiddenTextPosition = hiddenText.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (hiddenTextPosition < screenHeight * 0.8) {
    hiddenText.classList.add('visible-text');
  }
}