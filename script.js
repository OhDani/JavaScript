function checkEvenOdd() {
    const input = document.getElementById("numberInput").value;
    const num = parseInt(input);
    const resultElement = document.getElementById("result");
  
    if (isNaN(num)) {
      resultElement.innerText = "Vui lòng nhập một số hợp lệ.";
    } else if (num % 2 == 0) {
      resultElement.innerText = `${num+2}`;
    } else {
      resultElement.innerText = `${num+1}`;
    }
  }
  