// Bài 1

document.getElementById("btnCalcSalary").onclick = function() {
   var workDay = document.getElementById("workDay").value;

   // calculate salary
   const ONEDAYPAID = 100000;
   var totalSalary = workDay * ONEDAYPAID;

   var currentFormat = new Intl.NumberFormat('vn-VN');
   var result = "<p>Tiền lương 1 ngày: " + currentFormat.format(ONEDAYPAID) + "</p>";
   result += "<p>Số ngày công: " + workDay + "</p>";
   result += "<p>Tổng tiền lương: " + currentFormat.format(totalSalary) + "</p>";

   document.getElementById("footerSalary").innerHTML = result;
}

// Bài 2
document.getElementById("btnCalcAvg").onclick = function() {
   var firstNum = parseInt(document.getElementById("firstNum").value);
   var secondNum = parseInt(document.getElementById("secondNum").value);
   var thirdNum = parseInt(document.getElementById("thirdNum").value);
   var fourthNum = parseInt(document.getElementById("fourthNum").value);
   var fifthNum = parseInt(document.getElementById("fifthNum").value);

   // calculate
   var sum = firstNum + secondNum + thirdNum + fourthNum + fifthNum;
   var avgNum = sum / 5;

   var result = "<p>Trung bình cộng 5 số đã nhập là: ";
   result += avgNum + "</p>";

   document.getElementById("footerAverage").innerHTML = result;
}

// Bài 3
document.getElementById("btnExchange").onclick = function() {
   const EXCHANGERATE = 23500;
   var USD = document.getElementById("txtUSD").value;

   var currentFormat = new Intl.NumberFormat('vn-VN')

   // calculate
   var VND = USD * EXCHANGERATE;

   var result = "<p> Số tiền quy đổi VND là: "
   result += currentFormat.format(VND);

   document.getElementById("footerExchange").innerHTML = result;
}

// Bài 4
document.getElementById("btnExcercise4").onclick = function() {
   var length = parseInt(document.getElementById("txtLength").value)
   var width = parseInt(document.getElementById("txtWidth").value)

   var perimeter = (length + width) * 2;
   var area = length * width;

   var result = "<p> Chu vi HCN là: " + perimeter + "</p>";
   result += "<p> Diện tích HCN là: " + area + "</p>"

   document.getElementById("footerExcercise4").innerHTML = result;
}

// Bài 5
document.getElementById("btnExcercise5").onclick = function() {
   var number = document.getElementById("txtNumber").value;

   var unitDigit = number % 10;
   var tensDigit = Math.floor(number / 10);

   var sum = unitDigit + tensDigit;

   var result = "<p>Tổng 2 ký số là: " + sum + "</p>"

   document.getElementById("footerExcercise5").innerHTML = result;
}