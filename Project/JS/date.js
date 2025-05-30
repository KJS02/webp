fetch("date.json")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < 4; i++) {
      const el = document.getElementById("date" + (i + 1));
      if (el) el.innerText = data[i] || "정보 없음";
    }
  })
  .catch(() => {
    console.error("학사일정 로드 실패");
  });