let randomNum = Math.floor(Math.random() * 100);
let trial = 0;
const number_form = document.querySelector("#number-form");
const number_input = document.querySelector("#number-input");

//답 보여주기
console.log("정답은" + randomNum);

//숫자 입력하면 실행되는 함수
function enterNum(e) {
  //새로고침 방지하기
  e.preventDefault();

  //인풋태그에 입력된 값 가져오기
  let playerNum = +number_input.value;

  //시도한 횟수
  trial += 1;

  if (playerNum == randomNum) {
    console.log("정답은" + randomNum + "입니다!");
    console.log("당신이 " + trial + " 번 만에 맞췄습니다!😀");

    // 만약 입력한 숫자가 더 크면
  } else if (playerNum > randomNum) {
    console.log(playerNum + "보다 작은 숫자입니다!");

    // 만약 입력한 숫자가 더 작으면
  } else {
    console.log(playerNum + "보다 큰 숫자입니다!");
  }

  number_input.value = "";
}

number_form.addEventListener("submit", enterNum);
