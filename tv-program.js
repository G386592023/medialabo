// let data = {
//   "list": {
//     "g1": [
//       {
//         "id": "2022030428673",
//         "event_id": "28673",
//         "start_time": "2022-03-04T04:35:00+09:00",
//         "end_time": "2022-03-04T04:40:00+09:00",
//         "area": {
//           "id": "130",
//           "name": "東京"
//         },
//         "service": {
//           "id": "g1",
//           "name": "ＮＨＫ総合１",
//           "logo_s": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
//             "width": "100",
//             "height": "50"
//           },
//           "logo_m": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
//             "width": "200",
//             "height": "100"
//           },
//           "logo_l": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
//             "width": "200",
//             "height": "200"
//           }
//         },
//         "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
//         "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
//         "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
//         "act": "",
//         "genres": [
//           "0409",
//           "0700",
//           "0504"
//         ],


//       },
//       {
//         "id": "2022030427069",
//         "event_id": "27069",
//         "start_time": "2022-03-04T23:05:00+09:00",
//         "end_time": "2022-03-04T23:10:00+09:00",
//         "area": {
//           "id": "130",
//           "name": "東京"
//         },
//         "service": {
//           "id": "g1",
//           "name": "ＮＨＫ総合１",
//           "logo_s": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
//             "width": "100",
//             "height": "50"
//           },
//           "logo_m": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
//             "width": "200",
//             "height": "100"
//           },
//           "logo_l": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
//             "width": "200",
//             "height": "200"
//           }
//         },
//         "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
//         "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
//         "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
//         "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
//         "genres": [
//           "0700"
//         ],


//       }
//     ]
//   }
// };

/////////////////// 課題3-2 はここから書き始めよう

// for (let n=0; n<data.list.g1.length; n=n+1){
//   console.log(data.list.g1[n].title);
//   console.log(data.list.g1[n].service.name);
//   console.log(data.list.g1[n].start_time);
//   console.log(data.list.g1[n].end_time);
//   console.log(data.list.g1[n].act);
//   console.log(data.list.g1[n].subtitle);
// }

let count =0;

let b = document.querySelector('button#btn');

b.addEventListener('click', clear);

function clear() {
  if(count === 1){
    let zentai = document.createElement("div");
    zentai.classList.add("zentai");
    div.insertAdjacentElement("beforeend",zentai);  

  }
} 

function print (data) {

  let img = "みんなうた.png";

  let div = document.querySelector("div#result");

  let zentai = document.createElement("div");
  zentai.classList.add("zentai");
  div.insertAdjacentElement("beforeend",zentai);
  
  
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
  
}

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

	let s = document.querySelector("select#service");
	let idx = s.selectedIndex;
	let os = s.querySelectorAll('option');  
	let o = os.item(idx); 
	let service = o.getAttribute('value');
	
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

	print(data);

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
  count =1;
}
