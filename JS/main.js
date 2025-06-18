window.addEventListener("DOMContentLoaded", () => {
  // 현재 URL 경로에 따라 상대 경로 조정
  const isInManager = window.location.pathname.includes("/manager/");
  const basePath = isInManager ? "../main_HTML/" : "main_HTML/";

  // header 불러오기
  fetch(basePath + "header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-header").innerHTML = data;
      initScrollHeader(); // 헤더에 스크롤 효과 적용
      updateLoginStatus();
    });

  // footer 불러오기
  fetch(basePath + "footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    });
});

// 스크롤에 따라 헤더 숨기기/보이기
function initScrollHeader() {
  let didScroll = false;
  let lastScrollTop = 0;
  const delta = 5;
  const header = document.querySelector('header');
  const navbarHeight = header ? header.offsetHeight : 0;

  window.addEventListener('scroll', () => {
    didScroll = true;
  });

  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    const st = window.scrollY;

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      header.classList.remove('nav-down');
      header.classList.add('nav-up');
    } else {
      // Scroll Up
      if (st + window.innerHeight < document.body.scrollHeight) {
        header.classList.remove('nav-up');
        header.classList.add('nav-down');
      }
    }

    lastScrollTop = st;
  }
}
window.addEventListener("DOMContentLoaded", () => {
  const isInManager = window.location.pathname.includes("/manager/");
  const basePath = isInManager ? "../main_HTML/" : "main_HTML/";

  fetch(basePath + "header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-header").innerHTML = data;
      initScrollHeader();
      updateLoginStatus(); 
    });

  fetch(basePath + "footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    });
});


function updateLoginStatus() {
  const currentUser = localStorage.getItem("currentUser");

  const loginBtn = document.querySelector("#loginBtn");
  const logoutBtn = document.querySelector("#logoutBtn");
  const joinBtn = document.querySelector("#joinBtn");
  const mypageBtn = document.querySelector("#mypageBtn");

  if (currentUser) {
    if (loginBtn) loginBtn.style.display = "none";
    if (joinBtn) joinBtn.style.display = "none";
    if (mypageBtn) mypageBtn.style.display = "inline-block";
    if (logoutBtn) {
      logoutBtn.style.display = "inline-block";

      if (!logoutBtn.hasAttribute("data-bound")) {
        logoutBtn.addEventListener("click", () => {
          if (confirm("정말 로그아웃하시겠습니까?")) {
            localStorage.removeItem("currentUser");
            //localStorage.removeItem("userProfile");
            //localStorage.removeItem("userImage");
            window.location.href = "login.html";
          }
        });
        logoutBtn.setAttribute("data-bound", "true");
      }
    }
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (joinBtn) joinBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (mypageBtn) mypageBtn.style.display = "inline-block";
  }
}