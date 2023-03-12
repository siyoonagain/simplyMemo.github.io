document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("#new-task");
  let addButton = document.querySelector("#add-button");
  let listSpace = document.querySelector("#task-list");

  function addList() {
    if (!input.value) {
      input.focus();
    } else {
      let list = document.createElement("li");

      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";

      let text = document.createElement("p");
      text.textContent = input.value;

      let removeButton = document.createElement("button");
      removeButton.textContent = "삭제";

      list.appendChild(checkBox);
      list.appendChild(text);
      list.appendChild(removeButton);
      listSpace.appendChild(list);
      input.value = "";

      //   체크박스에 체크가 되어 있으면 line-through하기
      checkBox.addEventListener("change", (e) => {
        if (e.currentTarget.checked) {
          text.style.textDecoration = "line-through";
        } else {
          text.style.textDecoration = "none";
        }
      });
      // 삭제하기
      removeButton.addEventListener("click", (e) => {
        listSpace.removeChild(e.currentTarget.parentNode);
      });
    }
  }
  addButton.addEventListener("click", addList);
  input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      addList();
    }
  });
});
