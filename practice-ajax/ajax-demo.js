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
}
