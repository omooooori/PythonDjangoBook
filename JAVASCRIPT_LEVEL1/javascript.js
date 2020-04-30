function calc() {
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    var r = w / (h * h) / 10000;
    document.getElementById("result").textContent = "Your BMI is " + r;
}