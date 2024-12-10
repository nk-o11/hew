const userSelect = {
  'ニンニク':'',
  'ヤサイ':'',
  'アブラ':''
};/* CLICKしたときの値を入力 */

const nknk = document.getElementsByName('nknk');
const ysai = document.getElementsByName('ysai');
const rado = document.getElementsByName('rado');
/* アイテム取得の短縮版 */
// document.getElementsByName('nknk').forEach(item => {if(item.checked)userSelect.push(item.value);});

/* htmlでid指定したから↓のは要らなくなった */
// const submit = document.getElementById("submit");
btn.addEventListener("click",function(e) {      /* functionはpy:def的なの */
  // console.log("clicked");
  for(let i = 0; i < nknk.length; i++){ //iが0からnknkのリスト内の数値までループ
    if(nknk[i].checked){
      userSelect['ニンニク'] = nknk[i].value;
    }
  }
  
  for(let i = 0; i < ysai.length; i++){
    if(ysai[i].checked){
      userSelect['ヤサイ'] = ysai[i].value;
    }
  }
  
  for(let i = 0; i < rado.length; i++){
    if(rado[i].checked){
      userSelect['アブラ'] = rado[i].value;
    }
  }
  const urlParams = new URLSearchParams(userSelect).toString();
  const url = `./qr.html?${urlParams}`;
  window.location.href = url;
});


