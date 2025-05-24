// 크롤링한 데이터 예제
const crawledData = [
    { id: "main-a", title: "새로운 뉴스 1", link: "Cons.ocu.ac.kr" },
    { id: "main-b", title: "새로운 뉴스 2", link: "https://example.com/news2" },
    { id: "main-c", title: "새로운 뉴스 3", link: "https://example.com/news3" },
    { id: "main-d", title: "새로운 뉴스 4", link: "https://example.com/news4" }
];

// 학사일정 제목을 변경할 데이터 (실시간 업데이트 가능)
let dynamicTitle = "실시간 학사일정 업데이트"; 

// 제목을 실시간으로 변경하는 함수
function updateTitle() {
    document.getElementById("page-title").innerText = dynamicTitle;
}

// 뉴스 아이템을 업데이트하는 함수
function updateNewsItems() {
    crawledData.forEach(news => {
        const newsItem = document.getElementById(news.id);
        if (newsItem) {
            const newsLink = newsItem.querySelector("a");
            newsLink.href = news.link;
            newsLink.textContent = news.title;
        }
    });
}

// 실시간 업데이트 감지를 위한 MutationObserver 설정
const titleObserver = new MutationObserver(updateTitle);
titleObserver.observe(document.getElementById("page-title"), { childList: true });

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", () => {
    updateTitle();
    updateNewsItems();
});

// 예제: 특정 시간이 지나면 제목 변경 (실시간 적용)
setTimeout(() => {
    dynamicTitle = "최신 학사일정 반영됨!";
    updateTitle();
}, 5000); // 5초 후 제목 변경