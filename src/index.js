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

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    const addCompleteElement = document.getElementById("complete-list");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    li.appendChild(div).appendChild(p);
    li.appendChild(div).appendChild(backButton);
    li.appendChild(div).removeChild(completeButton);
    li.appendChild(div).removeChild(deleteButton);
    addCompleteElement.appendChild(li);
  });

  // button(戻る)タグ作成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    li.appendChild(div).appendChild(p);
    li.appendChild(div).removeChild(backButton);
    li.appendChild(div).appendChild(completeButton);
    li.appendChild(div).appendChild(deleteButton);
    addElement.appendChild(li);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  li.appendChild(div).appendChild(p);
  li.appendChild(div).appendChild(completeButton);
  li.appendChild(div).appendChild(deleteButton);

  // 未完了のリストに追加
  const addElement = document.getElementById("incomplete-list");
  addElement.appendChild(li);
};

const addText = document.getElementById("add-button");
addText.addEventListener("click", () => onClickAdd());
