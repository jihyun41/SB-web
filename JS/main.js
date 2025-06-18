window.addEventListener("DOMContentLoaded", () => {
  // 현재 URL 경로에 따라 상대 경로 조정
  const isInManager = window.location.pathname.includes("/manager/");
  const basePath = isInManager ? "../main_HTML/" : "main_HTML/";

  // header 불러오기
  fetch(basePath + "header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-header").innerHTML = data;
      initScrollHeader();        // 헤더 스크롤 반응 효과
      updateAuthButtons();       // 로그인 상태에 따라 버튼 변경
    });

  // footer 불러오기
  fetch(basePath + "footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    });
});

// 로그인 상태에 따라 버튼 교체
function updateAuthButtons() {
  const currentUser = localStorage.getItem('currentUser');
  const authContainer = document.getElementById('auth-buttons');
  if (!authContainer) return;

  if (currentUser) {
    authContainer.innerHTML = `
      <button type="button" class="btn" onclick="handleLogout()">로그아웃</button>
      <button type="button" class="btn" onclick="location.href='mypage.html'">마이페이지</button>
    `;
  } else {
    authContainer.innerHTML = `
      <button type="button" class="btn" onclick="location.href='login.html'">로그인</button>
      <button type="button" class="btn" onclick="location.href='create_account.html'">회원가입</button>
    `;
  }
}

// 로그아웃 기능
function handleLogout() {
  if (confirm('로그아웃 하시겠습니까?')) {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userProfile');
    localStorage.removeItem('userImage');
    window.location.reload();
  }
}

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