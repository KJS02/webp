import requests
from bs4 import BeautifulSoup
import json

url = "https://www.scnu.ac.kr/sce/main.do"
headers = {"User-Agent": "Mozilla/5.0"}

response = requests.get(url, headers=headers)
response.encoding = 'utf-8'  # 인코딩 설정

soup = BeautifulSoup(response.text, "html.parser")

# 학사일정 li 태그 안 항목들
items = soup.select(".pop_schedule ul li")

data = []
for li in items:
    date = li.select_one(".date")
    text = li.select_one(".txt")
    if date and text:
        data.append({
            "date": date.get_text(strip=True),
            "event": text.get_text(strip=True)
        })

# 결과 출력 or 저장
with open("schedule.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("학사일정 스크래핑 완료!")