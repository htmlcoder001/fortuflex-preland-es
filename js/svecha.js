let closePopup=document.querySelector('.close-popup')
let spinResultWrapper=document.querySelector(".spin-result-wrapper");let popupButton=document.querySelector('.pop-up-button')
let orderBlock=document.querySelector("#order");let svecka_id1=document.querySelector("#svecka_id1");let svecka_n=document.querySelector(".svecka_n");let svecka_id2=document.querySelector("#svecka_id2");let svecka_n1=document.querySelector(".svecka_n1");let svecka_id3=document.querySelector("#svecka_id3");let svecka_n2=document.querySelector(".svecka_n2");let svet__bottom_item1=document.querySelector(".svet__bottom_item1");let svet__bottom_item2=document.querySelector(".svet__bottom_item2")
let svet__bottom_item3=document.querySelector(".svet__bottom_item3");let fire__candle1=document.querySelector(".fire__candle1");let fire__candle2=document.querySelector(".fire__candle2");let fire__candle3=document.querySelector(".fire__candle3");let svet__skidka1=document.querySelector(".svet__skidka1");let svet__skidka2=document.querySelector(".svet__skidka2");let svet__skidka3=document.querySelector(".svet__skidka3");let cnt0=document.querySelector("#cnt0");let cnt1=document.querySelector("#cnt1");let cnt2=document.querySelector("#cnt2");let svet=document.querySelector(".svet")
popupButton.addEventListener('click',()=>{spinResultWrapper.style.display='none'})
closePopup.addEventListener('click',()=>{spinResultWrapper.style.display='none'})
svecka_id1.addEventListener("click",()=>{if(svet.classList.contains("svet_act")){return false}else{fire__candle1.classList.remove("none_active")
svecka_id1.classList.add("svecka_actttt")
svecka_n.classList.add("svecka_n_act")
svet__bottom_item1.classList.add("svet__bottom_item_act");setTimeout(()=>{fire__candle1.classList.add("none_active");svet__skidka1.classList.add("act");cnt0.innerHTML="100";svet__skidka1.classList.add("count_bg");fire__candle2.classList.remove("none_active")
svecka_id2.classList.add("svecka_actttt2")
svecka_n1.classList.add("svecka_n_act2")
svet__bottom_item2.classList.add("svet__bottom_item_act2")
fire__candle3.classList.remove("none_active")
svecka_id3.classList.add("svecka_actttt2")
svecka_n2.classList.add("svecka_n_act2")
svet__bottom_item3.classList.add("svet__bottom_item_act2")
setTimeout(()=>{fire__candle2.classList.add("none_active");svet__skidka2.classList.add("act");cnt1.innerHTML="50";svet__skidka2.classList.add("count_bg");fire__candle3.classList.add("none_active");svet__skidka3.classList.add("act");cnt2.innerHTML="0";svet__skidka3.classList.add("count_bg");setTimeout(()=>{orderBlock.style.display="block";spinResultWrapper.style.display="block";svet.style.display="none";start_timer()},2000)},5000)},5000)}
svet.classList.add("svet_act")});svecka_id2.addEventListener("click",()=>{if(svet.classList.contains("svet_act")){return false}else{fire__candle2.classList.remove("none_active")
svecka_id2.classList.add("svecka_actttt")
svecka_n1.classList.add("svecka_n_act")
svet__bottom_item2.classList.add("svet__bottom_item_act");setTimeout(()=>{svet__skidka2.classList.add("act");cnt1.innerHTML="100";fire__candle2.classList.add("none_active");svet__skidka2.classList.add("count_bg");fire__candle1.classList.remove("none_active")
svecka_id1.classList.add("svecka_actttt2")
svecka_n.classList.add("svecka_n_act2")
svet__bottom_item1.classList.add("svet__bottom_item_act2")
fire__candle3.classList.remove("none_active")
svecka_id3.classList.add("svecka_actttt2")
svecka_n2.classList.add("svecka_n_act2")
svet__bottom_item3.classList.add("svet__bottom_item_act2")
setTimeout(()=>{fire__candle1.classList.add("none_active");svet__skidka1.classList.add("act");cnt0.innerHTML="50";svet__skidka1.classList.add("count_bg");fire__candle3.classList.add("none_active");svet__skidka3.classList.add("act");cnt2.innerHTML="0";svet__skidka3.classList.add("count_bg");setTimeout(()=>{orderBlock.style.display="block";spinResultWrapper.style.display="block";svet.style.display="none";start_timer()},2000)},5000)},5000)}
svet.classList.add("svet_act")});svecka_id3.addEventListener("click",()=>{if(svet.classList.contains("svet_act")){return false}else{fire__candle3.classList.remove("none_active")
svecka_id3.classList.add("svecka_actttt")
svecka_n2.classList.add("svecka_n_act")
svet__bottom_item3.classList.add("svet__bottom_item_act")
setTimeout(()=>{svet__skidka3.classList.add("act");cnt2.innerHTML="100";fire__candle3.classList.add("none_active");svet__skidka3.classList.add("count_bg");fire__candle1.classList.remove("none_active")
svecka_id1.classList.add("svecka_actttt2")
svecka_n.classList.add("svecka_n_act2")
svet__bottom_item1.classList.add("svet__bottom_item_act2")
fire__candle2.classList.remove("none_active")
svecka_id2.classList.add("svecka_actttt2")
svecka_n1.classList.add("svecka_n_act2")
svet__bottom_item2.classList.add("svet__bottom_item_act2")
setTimeout(()=>{fire__candle2.classList.add("none_active");svet__skidka2.classList.add("act");cnt1.innerHTML="50";svet__skidka2.classList.add("count_bg");fire__candle1.classList.add("none_active");svet__skidka1.classList.add("act");cnt0.innerHTML="0";svet__skidka1.classList.add("count_bg");setTimeout(()=>{orderBlock.style.display="block";spinResultWrapper.style.display="block";svet.style.display="none";start_timer()},2000)},5000)},5000)}
svet.classList.add("svet_act")});var time=600;var intr;function start_timer(){intr=setInterval(tick,1000);}
function tick(){time=time-1;var mins=Math.floor(time/60);var secs=time-mins*60;if(mins==0&&secs==0){clearInterval(intr);}
secs=secs>=10?secs:"0"+secs;mins=mins>=10?mins:"0"+mins;$("#min").html(mins);$("#sec").html(secs);}