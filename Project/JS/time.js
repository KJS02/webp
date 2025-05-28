function updateImage() {
    let hour = new Date().getHours();
    let bgimage = document.getElementById("bgimg");
    let bgtxt = document.getElementById("bgtext");


    if (hour >= 6 && hour < 12) {
        bgimage.src = "./media/bg5.jpg"; // 오전 이미지
        bgtxt.innerText = "즐거운 오전입니다."; // 오전 문구

    } else if (hour >= 12 && hour < 18) {
        bgimage.src = "./media/bg5.jpg"; // 오후 이미지
        bgtxt.innerText = "즐거운 오후입니다."; // 오후 문구

    } else {
        bgimage.src = "./media/bg5.jpg"; // 저녁 이미지
        bgtxt.innerText = "즐거운 저녁입니다."; // 저녁 문구
    }
       // 날씨 정보 가져오기
    fetchWeather();

}


// 날씨 API 호출 함수
function fetchWeather() {
    const apiKey = 'd52f29cf58fb03daa37388c645b836c6';  // OpenWeatherMap에서 발급받은 API 키
    const city = '순천시';  // 원하는 도시명 (예: 서울)
    const weathericon = document.getElementById('weather-icon');  // 날씨 아이콘을 표시할 img 태그
    const weathertxt = document.getElementById('weather');  // 온도와 설명을 표시할 p 태그

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;  // 현재 온도
            const description = data.weather[0].description;  // 날씨 설명
            const iconCode = data.weather[0].icon;  // 날씨 아이콘 코드

            // 온도를 소수점 한 자리로 제한
            const temperatureFormatted = temperature.toFixed(1);

            // 날씨 아이콘 업데이트
            weathericon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;

            // 날씨 정보 업데이트 (온도는 소수점 한 자리까지 표시)
            weathertxt.innerText = `${temperatureFormatted}°C ${description}`;
        })
        .catch(error => {
            console.error('날씨 정보를 가져오는 데 실패했습니다:', error);
        });
}



window.onload = function() {
    updateImage();
}

setInterval(updateImage, 60000);