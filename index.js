let randomNum = Math.floor(Math.random() * 100);
let trial = 0;
let trial_num = [];
const number_form = document.querySelector("#number-form");
const number_input = document.querySelector("#number-input");
const show_num = document.querySelector("#show-num");

//답 보여주기
console.log("정답은" + randomNum);

//내가 시도했던 숫자 보여주기
function showNum(value, try_num, upOrDown) {
  const newLi = document.createElement("li");
  newLi.innerText = `${value} ${upOrDown}`;
  newLi.id = try_num;
  show_num.appendChild(newLi);
}

//숫자 입력하면 실행되는 함수
function enterNum(e) {
  //새로고침 방지하기
  e.preventDefault();

  //인풋태그에 입력된 값 가져오기
  let playerNum = +number_input.value;

  //기존에 입력했던 숫자인지 확인
  for (const element of trial_num) {
    if (element == playerNum) {
      alert("이미 입력했던 숫자입니다!");
      return;
    }
  }
  trial_num.push(playerNum);

  //시도한 횟수
  trial += 1;

  if (playerNum == randomNum) {
    showNum(playerNum, trial, "⭕");
    alert("정답을 " + trial + " 번 만에 맞췄습니다!😀");

    // 만약 입력한 숫자가 더 크면
  } else if (playerNum > randomNum) {
    showNum(playerNum, trial, "🔽");

    // 만약 입력한 숫자가 더 작으면
  } else {
    showNum(playerNum, trial, "🔼");
  }

  number_input.value = "";
}

number_form.addEventListener("submit", enterNum);
