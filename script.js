function update1(x) {
  document.getElementById("siffrainput").innerHTML = x;
}
function update2(y) {
  document.getElementById("bishinput").innerHTML = y;
}
function update3(z) {
  document.getElementById("boshinput").innerHTML = z;
}

let startLoop = () => {
  function InputData(text) {
    let para = document.getElementById("demo");
    let newBox = document.createElement("div");
    newBox.classList.add("boxes");
    newBox.innerHTML = text;
    para.appendChild(newBox);
  }

  document.getElementById("demo").innerHTML = "";
  let box = parseInt(document.getElementById("siffra").value);

  let bish = parseInt(document.getElementById("num1").value);
  let bosh = parseInt(document.getElementById("num2").value);
  let text = "";

  for (let i = 1; i <= box; i++) {
    if (i % bish == 0 && i % bosh == 0) {
      text += "Bish-Bosh" + " ";
      InputData(text);
      text = "";
    } else if (i % bish == 0) {
      text += "Bish" + " ";
      InputData(text);
      text = "";
    } else if (i % bosh == 0) {
      text += "Bosh" + " ";
      InputData(text);
      text = "";
    } else {
      text += i + " ";
      InputData(text);
      text = "";
    }
  }
};
