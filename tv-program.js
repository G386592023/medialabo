/////////////////// 課題3-2 はここから書き始めよう

// for (let n=0; n<data.list.g1.length; n=n+1){
//   console.log(data.list.g1[n].title);
//   console.log(data.list.g1[n].service.name);
//   console.log(data.list.g1[n].start_time);
//   console.log(data.list.g1[n].end_time);
//   console.log(data.list.g1[n].act);
//   console.log(data.list.g1[n].subtitle);
// }

let service;
let count =0;

function print (data) {

  let img = "みんなうた.png";

  let div = document.querySelector("div#result");

  let zentai = document.createElement("div");
  zentai.classList.add("zentai");
  div.insertAdjacentElement("beforeend",zentai);

  if(service === "g1"){
    let span = document.querySelector("span");
    span.textContent = data.list.g1.length;
    for (let n=0; n<data.list.g1.length; n=n+1){
    
      let box = document.createElement("div");
      box.classList.add("box");
      zentai.insertAdjacentElement("beforeend",box);
    
      let src = document.createElement("img");
      src.src = img;
      box.insertAdjacentElement("beforeend",src);
    
      let br = document.createElement("br");
      src.insertAdjacentElement("afterend",br);
    
      let title = document.createElement("h2");
      title.textContent = data.list.g1[n].title;
      br.insertAdjacentElement("afterend",title);
    
      let service = document.createElement("p");
      service.classList.add("kyoku");
      service.textContent = data.list.g1[n].service.name;
      title.insertAdjacentElement("afterend",service);
    
      let time = document.createElement("p");
      let time1 = data.list.g1[n].start_time.slice( 0 ,4 );
      let time2 = data.list.g1[n].start_time.slice( 5 ,7 );
      let time3 = data.list.g1[n].start_time.slice( 8 ,10 );
      let time4 = data.list.g1[n].start_time.slice( 11 ,13 );
      let time5 = data.list.g1[n].start_time.slice( 14 ,16 );
      let time6 = data.list.g1[n].end_time.slice( 11 ,13 );
      let time7 = data.list.g1[n].end_time.slice( 14 ,16 );
    
      let minute4 = Number(time4);
      let minute5 = Number(time5);
      let minute6 = Number(time6);
      let minute7 = Number(time7);
      let minute = (minute6*60 + minute7) - (minute4*60 + minute5);
    
      time.textContent = time1 + "年" + time2 + "月" + time3 + "日　" + time4 + ":" + time5 + "〜" + time6 + ":" + time7 + "（" + minute + "分）";
      service.insertAdjacentElement("afterend",time);
    
      let zentai2 = document.createElement("div");
      zentai2.classList.add("zentai2");
      time.insertAdjacentElement("afterend",zentai2);
    
    
      let box2 = document.createElement("div");
      box2.classList.add("box2");
      zentai2.insertAdjacentElement("beforeend",box2);
    
      let act = document.createElement("h3");
      act.textContent = "出演者ほか";
      box2.insertAdjacentElement("beforeend",act);
    
      let act2 = document.createElement("p");
      act2.textContent = data.list.g1[n].act;
      if(data.list.g1[n].act === ""){
        act2.textContent = "記載なし";
      }
      act.insertAdjacentElement("afterend",act2);
    
      let box22 = document.createElement("div");
      box22.classList.add("box2");
      box2.insertAdjacentElement("afterend",box22);
    
      let subtitle = document.createElement("h3");
      subtitle.textContent = "詳細";
      box22.insertAdjacentElement("beforeend",subtitle);
    
      let subtitle2 = document.createElement("p");
      subtitle2.textContent = data.list.g1[n].subtitle;
      if(data.list.g1[n].subtitle === ""){
        subtitle2.textContent = "記載なし";
      }
      subtitle.insertAdjacentElement("afterend",subtitle2);
    }

  }else {

    let span = document.querySelector("span");
    span.textContent = data.list.e1.length;
    for (let n=0; n<data.list.e1.length; n=n+1){
      let box = document.createElement("div");
      box.classList.add("box");
      zentai.insertAdjacentElement("beforeend",box);
    
      let src = document.createElement("img");
      src.src = img;
      box.insertAdjacentElement("beforeend",src);
    
      let br = document.createElement("br");
      src.insertAdjacentElement("afterend",br);
    
      let title = document.createElement("h2");
      title.textContent = data.list.e1[n].title;
      br.insertAdjacentElement("afterend",title);
    
      let service = document.createElement("p");
      service.classList.add("kyoku");
      service.textContent = data.list.e1[n].service.name;
      title.insertAdjacentElement("afterend",service);
    
      let time = document.createElement("p");
      let time1 = data.list.e1[n].start_time.slice( 0 ,4 );
      let time2 = data.list.e1[n].start_time.slice( 5 ,7 );
      let time3 = data.list.e1[n].start_time.slice( 8 ,10 );
      let time4 = data.list.e1[n].start_time.slice( 11 ,13 );
      let time5 = data.list.e1[n].start_time.slice( 14 ,16 );
      let time6 = data.list.e1[n].end_time.slice( 11 ,13 );
      let time7 = data.list.e1[n].end_time.slice( 14 ,16 );
    
      let minute4 = Number(time4);
      let minute5 = Number(time5);
      let minute6 = Number(time6);
      let minute7 = Number(time7);
      let minute = (minute6*60 + minute7) - (minute4*60 + minute5);
    
      time.textContent = time1 + "年" + time2 + "月" + time3 + "日　" + time4 + ":" + time5 + "〜" + time6 + ":" + time7 + "（" + minute + "分）";
      service.insertAdjacentElement("afterend",time);
    
      let zentai2 = document.createElement("div");
      zentai2.classList.add("zentai2");
      time.insertAdjacentElement("afterend",zentai2);
    
    
      let box2 = document.createElement("div");
      box2.classList.add("box2");
      zentai2.insertAdjacentElement("beforeend",box2);
    
      let act = document.createElement("h3");
      act.textContent = "出演者ほか";
      box2.insertAdjacentElement("beforeend",act);
    
      let act2 = document.createElement("p");
      act2.textContent = data.list.e1[n].act;
      if(data.list.e1[n].act === ""){
        act2.textContent = "記載なし";
      }
      act.insertAdjacentElement("afterend",act2);
    
      let box22 = document.createElement("div");
      box22.classList.add("box2");
      box2.insertAdjacentElement("afterend",box22);
    
      let subtitle = document.createElement("h3");
      subtitle.textContent = "詳細";
      box22.insertAdjacentElement("beforeend",subtitle);
    
      let subtitle2 = document.createElement("p");
      subtitle2.textContent = data.list.e1[n].subtitle;
      if(data.list.e1[n].subtitle === ""){
        subtitle2.textContent = "記載なし";
      }
      subtitle.insertAdjacentElement("afterend",subtitle2);
    }
  }
}

function print2() {
  let span = document.querySelector("span");
  span.textContent = "0";

  let div = document.querySelector("div#result");

  let zero = document.createElement("p");
  zero.textContent = "条件に一致する番組がありませんでした。";
  div.insertAdjacentElement("beforeend",zero);
}

function clear() {
  let div = document.querySelector("div#result");

  let div2 = div.querySelectorAll("div");
  for(let n of div2){
    n.remove();
  }
  let img = div.querySelectorAll("img");
  for(let n of img){
    n.remove();
  }
  let br = div.querySelectorAll("br");
  for(let n of br){
    n.remove();
  }
  let h2 = div.querySelectorAll("h2");
  for(let n of h2){
    n.remove();
  }
  let p = div.querySelectorAll("p");
  for(let n of p){
    n.remove();
  }
  let h3 = div.querySelectorAll("h3");
  for(let n of h3){
    n.remove();
  }
}

let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);

function showSelectResult() {

  let s = document.querySelector("select#service");
  let idx = s.selectedIndex;
  
  let os = s.querySelectorAll('option');  
  let o = os.item(idx); 
  
  console.log('チャンネル:' + o.getAttribute('value'));

  let s2 = document.querySelector("select#genre");
  let idx2 = s2.selectedIndex;
  
  let os2 = s2.querySelectorAll('option');  
  let o2 = os2.item(idx2); 
  
  console.log('ジャンル:' + o2.getAttribute('value'));

}

b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
  count = count +1;
  if(count > 1){
    clear();
  }

	let s = document.querySelector("select#service");
	let idx = s.selectedIndex;
	let os = s.querySelectorAll('option');  
	let o = os.item(idx); 
	service = o.getAttribute('value');
	
	let s2 = document.querySelector("select#genre");
	let idx2 = s2.selectedIndex;
	let os2 = s2.querySelectorAll('option');  
	let o2 = os2.item(idx2); 
	let genre = o2.getAttribute('value');
    
	// URL を設定
	let url = "https://www.nishita-lab.org/web-contents/jsons/nhk/" + service + "-" + genre + "-j.json";

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);
  

  if(data.list === null){
    print2(); 
  }else{
    print(data);
  }

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
