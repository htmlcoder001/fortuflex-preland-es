const siteProduct={name:'СуставПРО'}
if(siteProduct){const xhr=new XMLHttpRequest()
const requestURL='https://click.lucky.online/click/ip-location.html'
xhr.open('GET',requestURL,true)
xhr.responseType='json'
xhr.onload=()=>{document.querySelector('.cityFrom').textContent=xhr.response.city}
xhr.send()
$('body').append(`<div class="demon_popup">
				<div class="demon_overflow"></div>
				<div class="demon_popup_body">
					<span class="demon_close"></span>
					<h4 class="demon_popup_title" >Вы из города <span class="cityFrom" style='font-size: 28px'>Санкт-Петербург</span>? Подождите!</h4>
					<img src="img/product.png" alt="" style="width:28%">
					<p>Для Вас действует специальное ограниченное предложение</p>
					<p>
						Успейте принять участие в программе и получите ${siteProduct.name} по акции <span class="new_price_val"></span>
						<span class="new_price_cur">БЕСПЛАТНО</span>
						<span style="color:#fff !important">!</span>
					</p>
					<a href="#goToForm" class="popup_btn">УЗНАТЬ ПОДРОБНЕЕ</a>
				</div>
			</div>`)
var closeElems=document.querySelectorAll('.demon_overflow, .demon_close'),demonPopup=document.getElementsByClassName('demon_popup')[0]
for(let i=0;i<closeElems.length;i++){closeElems[i].onclick=function(){}}
var flag=true
$(window).mouseout(function(e){if(e.pageY-$(window).scrollTop()<1&&flag==true){demonPopup.classList.add('active')}})
$('.demon_close,.popup_btn').on('click',function(){demonPopup.classList.remove('active')})}