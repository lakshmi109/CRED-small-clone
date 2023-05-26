let fadeElements = document.querySelectorAll('.fade-scroll');

window.addEventListener('scroll', function() {
  fadeElements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    } else {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    }
  });
});

function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var currIndex = 0;

window.addEventListener('scroll', function() {
  var imageElement = document.querySelectorAll('.image-scroll');
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (scrollTop > viewportHeight*1) {
    if(currIndex !== 0) imageElement[currIndex].classList.add('fade-out');
    imageElement[currIndex].classList.remove('active');
    imageElement[0].classList.add('active');
    currIndex = 0;
  }
  if (scrollTop > viewportHeight*2.7) {
    imageElement[currIndex].classList.add('fade-out');
    imageElement[currIndex].classList.remove('active');
    imageElement[1].classList.add('active');
    currIndex = 1;
  }
  if (scrollTop > viewportHeight*4.2) {
    imageElement[currIndex].classList.add('fade-out');
    imageElement[currIndex].classList.remove('active');
    imageElement[2].classList.add('active');
    currIndex = 2;
  }
  if (scrollTop > viewportHeight*5.5) {
    imageElement[currIndex].classList.add('fade-out');
    imageElement[currIndex].classList.remove('active');
    imageElement[3].classList.add('active');
    currIndex = 3;
  }
});  