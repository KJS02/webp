function loadSchedule() {
  fetch("schedule.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("schedule-container");
      if (!container) return;

      container.innerHTML = data.map(item => `
        <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
          <strong>${item.date}</strong><br>
          <span>${item.event}</span>
        </div>
      `).join('');
    })
    .catch(error => {
      console.error("학사일정 로드 실패:", error);
      const container = document.getElementById("schedule-container");
      if (container) container.innerText = "학사일정을 불러오지 못했습니다.";
    });
}

// 최초 1회 호출
loadSchedule();

// 이후 5분마다 자동 새로고침
setInterval(loadSchedule, 5 * 60 * 1000); // 5분 = 300,000ms
