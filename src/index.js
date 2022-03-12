import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li作成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const p = document.createElement("p");
  p.innerText = inputText;

  // divタグの子要素に各要素を設定
  li.appendChild(div).appendChild(p);

  // 未完了のリストに追加
  const addElement = document.getElementById("incomplete-list");
  addElement.appendChild(li);
};

const addText = document.getElementById("add-button");
addText.addEventListener("click", () => onClickAdd());
