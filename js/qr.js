const urlParams = new URLSearchParams(window.location.search);
// 中に入っている値を抽出する
const nk = urlParams.get('ニンニク');
const ysi = urlParams.get('ヤサイ');
const abr = urlParams.get('アブラ');
// coalにひとまとめにする
const coal = `ニンニク:${nk}  ヤサイ:${ysi}  アブラ:${abr}`;
const order = document.createElement('h1');
ctb.appendChild(order);
order.innerText = coal;
gazou.src = `./image/ニンニク${nk}ヤサイ${ysi}アブラ${abr}.png`;

const url=window.location.href;
console.log(url);
const qrcode = new QRCode(qr,{
  text: url,
  width: 300,
  height: 300,
  correctLevel: QRCode.CorrectLevel.H,
  version: 10
});