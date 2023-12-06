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
const defaultText = "  한 선 겸 |";

function typeText() {
  let currentIndex = 0;
  function updateValue() {
    inputElement.value = defaultText.slice(0, currentIndex);
    currentIndex++;

    if (currentIndex <= defaultText.length) {
      setTimeout(updateValue, 200); // 200 milliseconds 간격으로 타이핑 효과 반복
    } else {
      setTimeout(typeText, 3000); // 3초 후에 다시 반복
    }
  }

  updateValue();
}

// 페이지 로드 시 타이핑 효과 시작
typeText();

//모달창
// 버튼과 모달 요소들을 변수로 저장
const open_btns = document.querySelectorAll(".open_btn");
const modals = document.querySelectorAll(".modal");
const close_btns = document.querySelectorAll(".close_btn");

// 각 버튼에 이벤트 리스너 추가
open_btns.forEach((button) => {
  button.addEventListener("click", function () {
    const targetModalId = button.getAttribute("data-modal-target");
    const targetModal = document.getElementById(targetModalId);
    openModal(targetModal);
  });
});

// 각 닫기 버튼에 이벤트 리스너 추가
close_btns.forEach((close) => {
  close.addEventListener("click", function () {
    const targetModalId = close.getAttribute("data-modal-close");
    const targetModal = document.getElementById(targetModalId);
    closeModal(targetModal);
  });
});

const overlay = document.querySelector(".overlay");
// 모달 열기 함수
function openModal(modal) {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
  overlay.classList.add("active");
  hideArrowButton();
}

// 모달 닫기 함수
function closeModal(modal) {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
  overlay.classList.remove("active");
  showArrowButton();
}

// arrow-up 버튼 숨기기 함수
function hideArrowButton() {
  const arrowButton = document.querySelector(".arrow-up");
  arrowButton.style.display = "none";
}

// arrow-up 버튼 보이기 함수
function showArrowButton() {
  const arrowButton = document.querySelector(".arrow-up");
  arrowButton.style.display = "block";
}

// 모든 닫기 버튼에 이벤트 리스너 추가
close_btns.forEach(function (close) {
  close.addEventListener("click", function () {
    const targetModalId = close.getAttribute("data-modal-close");
    const targetModal = document.getElementById(targetModalId);
    closeModal(targetModal);
  });
});

//사진넘기기
const allModals = document.querySelectorAll(".modal");

allModals.forEach((modal, index) => {
  const slideImages = modal.querySelector(".slide_images");
  const nextButton = modal.querySelector(".btn_next");
  const prevButton = modal.querySelector(".btn_prev");
  const images = modal.querySelectorAll(".draw, .ani, .color");
  let currentImageIndex = 0;

  updateImage();

  nextButton.addEventListener("click", () => {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      updateImage();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateImage();
    }
  });

  function updateImage() {
    images.forEach((image) => (image.style.display = "none"));
    images[currentImageIndex].style.display = "block";
    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === images.length - 1;
  }
});

// arrowUp버튼
// arrowUp 버튼 표시 여부를 결정하는 함수
function updateArrowVisibility() {
  const arrowUp = document.querySelector(".arrow-up");
  const homeSection = document.getElementById("home");
  const homeHeight = homeSection.offsetHeight;

  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
}

// 스크롤 이벤트에 updateArrowVisibility 함수 연결
document.addEventListener("scroll", updateArrowVisibility);

// 페이지 로드 시에도 updateArrowVisibility 함수 호출
document.addEventListener("DOMContentLoaded", updateArrowVisibility);
