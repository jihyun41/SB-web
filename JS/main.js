
window.addEventListener("DOMContentLoaded", () => {
    fetch("main HTML/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("include-header").innerHTML = data;

          
            initScrollHeader();  
        });

    fetch("main HTML/footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("include-footer").innerHTML = data);
});
var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();


  $(window).scroll(function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }
  function initScrollHeader() {
  let didScroll;
  let lastScrollTop = 0;
  const delta = 5;
  const navbarHeight = document.querySelector('header').offsetHeight;

  window.addEventListener('scroll', function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    const st = window.scrollY;
    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      document.querySelector('header').classList.remove('nav-down');
      document.querySelector('header').classList.add('nav-up');
    } else {
      document.querySelector('header').classList.remove('nav-up');
      document.querySelector('header').classList.add('nav-down');
    }

    lastScrollTop = st;
  }
}

