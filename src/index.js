import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

// 未完了リストにさ作成するタスク
const createIncompleteList = (text) => {
  // li作成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const p = document.createElement("p");
  p.innerText = text;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeElement = completeButton.parentNode.parentNode;
    const textElement =
      completeElement.firstElementChild.firstElementChild.innerText;
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    completeElement.firstElementChild.innerText = null;

    // pタグ作成
    const p = document.createElement("p");
    p.innerText = textElement;

    // button（戻す）タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    completeElement.firstElementChild.appendChild(p);
    completeElement.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(completeElement);

    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode.parentNode;
      const backText = backTarget.firstElementChild.firstElementChild.innerText;
      createIncompleteList(backText);
      document.getElementById("complete-list").removeChild(backTarget);
    });
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
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
