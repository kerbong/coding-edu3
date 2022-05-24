let randomNum = Math.floor(Math.random() * 100);
let playerNum;
let playTheGame = true;

function askingNum() {
  playerNum = parseInt(prompt("숫자를 입력하세요!"));
}

//답 보여주기
console.log(randomNum);
while (playTheGame) {
  askingNum();
  if (playerNum == randomNum) {
    console.log("당신이 맞췄습니다!");
    playTheGame = false;
  }
}

// 물어보기
// 숫자랑 비교하기
// 만약 숫자가 같으면
// 멈추기
// 만약 숫자가 같지 않으면
// 물어보기
// 숫자랑 비교하기
// 물어보기
// 숫자랑 비교하기
// 만약 숫자가 같으면
// 멈추기
