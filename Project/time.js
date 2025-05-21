function updateImage() {
    let hour = new Date().getHours();
    let imageElement = document.getElementById("bgimg");
    let textElement = document.getElementById("bgtext");



    if (hour >= 6 && hour < 12) {
        imageElement.src = "./media/bg2.jpg"; // 오전 이미지
        textElement.innerText = "즐거운 오전입니다"; // 오전 문구

    } else if (hour >= 12 && hour < 18) {
        imageElement.src = "./media/bg5.jpg"; // 오후 이미지
        textElement.innerText = "즐거운 오후입니다."; // 오후 문구

    } else {
        imageElement.src = "./media/bg2.jpg"; // 저녁 이미지
        textElement.innerText = "즐거운 저녁입니다"; // 저녁 문구
    }
}

updateImage();

setInterval(updateImage, 60000);