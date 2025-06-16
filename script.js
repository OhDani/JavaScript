function checkEvenOdd() {
    const input = document.getElementById("numberInput").value;
    const num = parseInt(input);
    const resultElement = document.getElementById("result");
  
    if (isNaN(num)) {
      resultElement.innerText = "Vui lòng nhập một số hợp lệ.";
    } else if (num % 2 === 0) {
      resultElement.innerText = `${num} là số chẵn.`;
    } else {
      resultElement.innerText = `${num} là số lẻ.`;
    }
  }
  