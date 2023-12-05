/*홈 타이틀 색상*/
const rainbowTextContainer = document.getElementById("rainbow-text-container");
const text = "Google";
const colors = [
  "#95C9EC",
  "#E397AC",
  "#F6E486",
  "#95C9EC",
  "#9CC995",
  "#E397AC",
];

for (let i = 0; i < text.length; i++) {
  const div = document.createElement("div");
  div.textContent = text[i];
  div.style.color = colors[i];
  rainbowTextContainer.appendChild(div);
}

// 타이핑효과
const inputElement = document.querySelector(".home_serch_input");
const defaultText = "  한선겸 |";

function typeText() {
  let currentIndex = 0;
  function updateValue() {
    inputElement.value = defaultText.slice(0, currentIndex);
    currentIndex++;

    if (currentIndex <= defaultText.length) {
      setTimeout(updateValue, 200); // 200 milliseconds 간격으로 타이핑 효과 반복
    } else {
      setTimeout(typeText, 4000); // 4초 후에 다시 반복
    }
  }

  updateValue();
}

// 페이지 로드 시 타이핑 효과 시작
typeText();
