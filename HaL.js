const a = ["cards/H1.png","cards/D1.png","cards/C1.png","cards/S1.png"];
const b = ["cards/H2.png","cards/D2.png","cards/C2.png","cards/S2.png"];
const c = ["cards/H3.png","cards/D3.png","cards/C3.png","cards/S3.png"];
const d = ["cards/H4.png","cards/D4.png","cards/C4.png","cards/S4.png"];
const e = ["cards/H5.png","cards/D5.png","cards/C5.png","cards/S5.png"];
const f = ["cards/H6.png","cards/D6.png","cards/C6.png","cards/S6.png"];
const g = ["cards/H7.png","cards/D7.png","cards/C7.png","cards/S7.png"];
const h = ["cards/H8.png","cards/D8.png","cards/C8.png","cards/S8.png"];
const i = ["cards/H9.png","cards/D9.png","cards/C9.png","cards/S9.png"];
const j = ["cards/H10.png","cards/D10.png","cards/C10.png","cards/S10.png"];
const k = ["cards/H11.png","cards/D11.png","cards/C11.png","cards/S11.png"];
const l = ["cards/H12.png","cards/D12.png","cards/C12.png","cards/S12.png"];
const m = ["cards/H13.png","cards/D13.png","cards/C13.png","cards/S13.png"];

const cards = [b,c,d,e,f,g,h,i,j,k,l,m,a];

document.getElementByIdI("cards").scr = "cards/Start.png";
let res = null;
let yen = 1;

function start(){
 yen=1;
 document.getElementById("score").innerText = yen;
 document.getElementById("high").style.display = "block";
 document.getElementById("even").style.display = "block";
 document.getElementById("low").style.display = "block";
 document.getElementById("start").style.display = "none";
 const index = Math.floor(Math.random() * cards.length);
 const r = cards[index];
 const i_index = Math.floor(Math.random() * r.length);
 const i = r[i_index];
 document.getElementById("cards").src = i;
 r.splice(i_index,1);
 res = index+2;
 console.log(res);
 console.log(yen);
}

function high(){
  if (cards.length===0){
   document.getElementById("cards").src = "cards/End.png";
   document.getElementById("high").style.display = "none";
   document.getElementById("even").style.display = "none";
   document.getElementById("low").style.display = "none";
   document.getElementById("start").style.display = "none";
   document.getElementById("end").innerText = "End";
   return;
  }
 const index = Math.floor(Math.random() * cards.length);
 const r = cards[index];
 const i_index = Math.floor(Math.random() * r.length);
 const i = r[i_index];
 if (res < index+2){
  document.getElementById("cards").src = i;
  res=index+2;
  yen=yen*2;
  console.log(res);
  console.log(yen);
  document.getElementById("score").innerText = yen;
  r.splice(i_index,1);
  if (r.length===0){
   cards.splice(index,1); 
  }
 } else {
  document.getElementById("cards").src = "cards/End.png";
  document.getElementById("high").style.display = "none";
  document.getElementById("even").style.display = "none";
  document.getElementById("low").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("end").innerText = "Game Over";
  console.log(res);
  console.log(i);
  console.log(index+2);
 }
}

function low(){
  if (cards.length===0){
   document.getElementById("cards").src = "cards/End.png";
   document.getElementById("high").style.display = "none";
   document.getElementById("even").style.display = "none";
   document.getElementById("low").style.display = "none";
   document.getElementById("start").style.display = "none";
   document.getElementById("end").innerText = "End";
   return;
  }
 const index = Math.floor(Math.random() * cards.length);
 const r = cards[index];
 const i_index = Math.floor(Math.random() * r.length);
 const i = r[i_index];
 if (res > index+2){
  document.getElementById("cards").src = i;
  res=index+2;
  yen=yen*2;
  console.log(res);
  console.log(yen);
  document.getElementById("score").innerText = yen;
  r.splice(i_index,1);
  if (r.length===0){
   cards.splice(index,1); 
  }
 } else {
  document.getElementById("cards").src = "cards/End.png";
  document.getElementById("high").style.display = "none";
  document.getElementById("even").style.display = "none";
  document.getElementById("low").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("end").innerText = "Game Over";
  console.log(res);
  console.log(i);
  console.log(index+2);
 }
}

function even(){
  if (cards.length===0){
   document.getElementById("cards").src = "cards/End.png";
   document.getElementById("high").style.display = "none";
   document.getElementById("even").style.display = "none";
   document.getElementById("low").style.display = "none";
   document.getElementById("start").style.display = "none";
   document.getElementById("end").innerText = "End";
   return;
  }
 const index = Math.floor(Math.random() * cards.length);
 const r = cards[index];
 const i_index = Math.floor(Math.random() * r.length);
 const i = r[i_index];
 if (res == index+2){
  document.getElementById("cards").src = i;
  res=index+2;
  yen=yen*2;
  console.log(res);
  console.log(yen);
  document.getElementById("score").innerText = yen;
  r.splice(i_index,1);
  if (r.length===0){
   cards.splice(index,1); 
  }
 } else {
  document.getElementById("cards").src = "cards/End.png";
  document.getElementById("high").style.display = "none";
  document.getElementById("even").style.display = "none";
  document.getElementById("low").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("end").innerText = "Game Over";
  console.log(res);
  console.log(i);
  console.log(index+2);
 }
}
