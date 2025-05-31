document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('[data-page]');

  // 모든 뷰를 배열로 관리
  const views = {
    'home': document.getElementById('home-view'),
    'calendar': document.getElementById('calendar-view'),
    'SCNU-1': document.getElementById('SCNU-1-view'),
    'SCNU-2': document.getElementById('SCNU-2-view'),
    'SCNU-3': document.getElementById('SCNU-3-view'),
  };

  // 공통적으로 모든 뷰를 숨기는 함수
  const hideAllViews = () => {
    Object.values(views).forEach(view => {
      if (view) view.style.display = 'none';
    });
  };

  // 링크마다 클릭 이벤트 등록
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const page = link.getAttribute('data-page');
      if (!page || !views[page]) return;

      hideAllViews(); // 모든 화면 숨기고
      views[page].style.display = 'block'; // 해당 뷰만 보이게
    });
  });

  // 초기 상태는 home 보여주기
  hideAllViews();
  if (views.home) views.home.style.display = 'block';
});
