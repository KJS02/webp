from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/data")
def get_schedule():
    url = "https://www.scnu.ac.kr/SCNU/sv/schdulView/schdulCalendarView.do?mi=1362"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    items = soup.select(".tb_notice .subject")  # 구조에 따라 적절히 변경 필요

    data = []
    for item in items[:4]:  # 상위 4개 일정만 가져오기
        data.append(item.get_text(strip=True))

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
