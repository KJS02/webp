import requests
from bs4 import BeautifulSoup
import json

url = "https://www.scnu.ac.kr/sce/main.do"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# 예시 선택자 — 페이지 구조에 따라 변경 필요
items = soup.select(".calBoard_list li")  # 또는 .info-list li, 실제 구조에 맞게 수정

schedules = [item.get_text(strip=True) for item in items[:4]]

with open("/var/www/html/date.json", "w", encoding="utf-8") as f:
    json.dump(schedules, f, ensure_ascii=False)
