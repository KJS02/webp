from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

import os

app = Flask(__name__)

print("📁 현재 작업 디렉토리:", os.getcwd())
print("📁 Flask static 경로:", os.path.abspath(app.static_folder))

@app.route("/")
def home():
    # 컴퓨터공학과 공지사항 페이지 URL
    url = "https://www.scnu.ac.kr/sce/main.do"
    headers = {"User-Agent": "Mozilla/5.0"}
    res = requests.get(url, headers=headers)
    soup = BeautifulSoup(res.text, "html.parser")

    # 공지사항 추출 (실제 구조에 따라 선택자 조정 필요)
    notices = []
    notice_elements = soup.select(".notice_list li")  # 예시 선택자
    for elem in notice_elements[:5]:  # 상위 5개 공지사항
        title = elem.select_one("a").get_text(strip=True)
        link = elem.select_one("a")["href"]
        date = elem.select_one(".date").get_text(strip=True)
        notices.append({"title": title, "link": link, "date": date})

    return render_template("main.html", notices=notices)

if __name__ == '__main__':
    app.run(debug=True)