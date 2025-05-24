import requests
from bs4 import BeautifulSoup

# 1. URL 지정
url = "https://news.naver.com"

# 2. HTML 요청
headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(url, headers=headers)
html = response.text

# 3. BeautifulSoup으로 파싱
soup = BeautifulSoup(html, 'html.parser')

# 4. 원하는 데이터 찾기 (예: 메인 뉴스 타이틀)
titles = soup.select('.main_component .main_news_area a')

# 5. 출력
for title in titles:
    print(title.text.strip(), "-", title['href'])