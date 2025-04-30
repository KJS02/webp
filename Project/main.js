$(document).ready(function () {
    // 스타일을 변경합니다.
    $('#box').css({
        width: 100,
        height: 10,
        background: 'blue'
    }).animate({
        width: 900,
        opacity: 0.5,
    }, 2000);
});




// 변수를 선언합니다.
var date = new Date();
var hours = date.getHours();

// 조건문
if (hours < 12) {
    // 표현식 "hours < 12"가 참일 경우 실행합니다.
    document.write('오전입니다.');
} else {
    // 표현식 "hours < 12"가 거짓일 경우 실행합니다.
    document.write('즐거운 오후입니다.');
}