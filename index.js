let randomNum = Math.floor(Math.random() * 100);
let trial = 0;
let playerNum;

function askNum() {
  playerNum = +prompt("숫자를 입력하세요!", "");
}

//답 보여주기
alert("정답은" + randomNum);
//반복하기
while (true) {
  //시도한 횟수
  trial += 1;
  //물어보기
  askNum();
  //숫자랑 비교하기
  // 만약 숫자가 같으면
  if (playerNum == randomNum) {
    console.log("당신이 " + trial + " 번 만에 맞췄습니다!");
    // 멈추기
    break;
  } else if (playerNum > randomNum) {
    // 만약 입력한 숫자가 더 크면
    console.log(playerNum + "보다 작은 숫자입니다!");
    // 만약 입력한 숫자가 더 작으면
  } else {
    console.log(playerNum + "보다 큰 숫자입니다!");
  }
}
