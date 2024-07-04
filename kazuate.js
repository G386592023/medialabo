// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let a = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b = document.querySelector('#print');
b.addEventListener('click', hantei);

function hantei() {
  let i = document.querySelector('input[name="kazu"]');
  let kazu = i.value;

  let yoso = Number(kazu);

  kaisu = kaisu+1; 

  let kaisu2 = document.querySelector("span#kaisu");
  kaisu2.textContent = kaisu;

  let answer = document.querySelector("span#answer");
  answer.textContent = yoso;

  let p = document.querySelector("p#result"); 
  
  if (kaisu > 3 || a === 1){
    p.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } 

  if(kotae === yoso && a === 0){
    p.textContent = "正解です．おめでとう!";
    a = 1;
  } 

  if(kotae < yoso && kaisu < 4 && a === 0){
    p.textContent = "まちがい．答えはもっと小さいですよ";
  }

  if(kotae > yoso && kaisu < 4 && a === 0){
    p.textContent = "まちがい．答えはもっと大きいですよ";
  }


}
  // 課題3-1における出力先はコンソール

