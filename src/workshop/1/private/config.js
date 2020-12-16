export function print(text) {
  let paragraph = document.createElement("p");
  let node = document.createTextNode(text);
  paragraph.appendChild(node);
  document.querySelector("#console").appendChild(paragraph);
}

export function clear() {
  document.querySelector("#console").innerText = "";
}
