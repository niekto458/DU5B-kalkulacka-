function calc(op) {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let result;

  if (op === "+") result = a + b;
  if (op === "-") result = a - b;
  if (op === "*") result = a * b;
  if (op === "/") result = a / b;

  document.getElementById("result").innerText = "Výsledok: " + result;
}
