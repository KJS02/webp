document.addEventListener("DOMContentLoaded", () => {
    fetch("http://127.0.0.1:5000/data")
        .then(response => response.json())
        .then(data => {
            if (data.length >= 4) {
                document.getElementById("SCNU1").innerText = data[0];
                document.getElementById("SC1").innerText = "";
                document.getElementById("SCNU2").innerText = data[1];
                document.getElementById("SC2").innerText = "";
                document.getElementById("SCNU3").innerText = data[2];
                document.getElementById("SC3").innerText = "";
                document.getElementById("SCNU4").innerText = data[3];
                document.getElementById("SC4").innerText = "";
            }
        })
        .catch(error => {
            console.error("학사일정 불러오기 실패:", error);
        });
});
