document.addEventListener("DOMContentLoaded", function () {
  const memoTextarea = document.getElementById("memo");
  const saveButton = document.getElementById("saveButton");

  // 저장 버튼 클릭 시 동작
  saveButton.addEventListener("click", function () {
    const memoText = memoTextarea.value;
    // 여기에서는 간단히 콘솔에 메모 내용을 출력합니다.
    console.log(memoText);
    // 실제로 저장하거나 다른 동작을 수행할 수 있습니다.
  });
});
