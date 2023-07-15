let count = 0;

function changeImage(src) {
    document.querySelector("img").src = "./images/" + src + ".png";
}

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("大便");
}
document.body.onmouseup = function () {
    changeImage("Q版香蕉");
}