// MORE ボタンを押したときの反応

const moreBtn = document.getElementById('js-moreBtn');
const moreItems = document.getElementsByClassName('js-more-item');
const gridArea = document.getElementById('grid-area');

moreBtn.addEventListener('click',function(){
    moreBtn.classList.add('active');
    gridArea.classList.add('active');
    for(i = 0; i < moreItems.length; i++){
        moreItems[i].classList.remove('active');
    }
})
console.log(moreItems);

// submenu　ホバーしたときに発生するイベント
const hover1 = document.getElementsByClassName('js-hover-menu1');
const hover2 = document.getElementsByClassName('js-hover-menu2');
const hover3 = document.getElementsByClassName('js-hover-menu3');
const hover4 = document.getElementsByClassName('js-hover-menu4');
const hover5 = document.getElementsByClassName('js-hover-menu5');
const closeAs = document.getElementsByClassName('js-closeA');
const contents = document.querySelectorAll('.js-container');
let content1 = document.getElementsByClassName('js-make-car');
let content2 = document.getElementsByClassName('js-company-info');
let content3 = document.getElementsByClassName('js-sustainability');
let content4 = document.getElementsByClassName('js-Investor-info');
let content5 = document.getElementsByClassName('js-Recruitment');

for(i=0;i<closeAs.length;i++){
    closeAs[i].addEventListener('mouseover',closeDrop);
}
function closeDrop(){
    for(j=0;j<5;j++){
        contents[j].classList.remove('active');
    }
}
hover1[0].addEventListener('mouseover',function(){
    content1[0].classList.add('active')    
});
content1[0].addEventListener('mouseleave',function(){
    content1[0].classList.remove('active');
})

console.log(contents)

hover2[0].addEventListener('mouseover',function(){
    content2[0].classList.add('active')    
});
content2[0].addEventListener('mouseleave',function(){
    content2[0].classList.remove('active');
})

hover3[0].addEventListener('mouseover',function(){
    content3[0].classList.add('active')    
});
content3[0].addEventListener('mouseleave',function(){
    content3[0].classList.remove('active');
})

hover4[0].addEventListener('mouseover',function(){
    content4[0].classList.add('active')    
});
content4[0].addEventListener('mouseleave',function(){
    content4[0].classList.remove('active');
})

hover5[0].addEventListener('mouseover',function(){
    content5[0].classList.add('active');
});
content5[0].addEventListener('mouseleave',function(){
    content5[0].classList.remove('active');
})


// ハンバーガーメニュー
const humBtn = document.querySelector('.hum-btn');
const body = document.querySelector('#js-body');

humBtn.addEventListener('click',function(){
    body.classList.toggle('active')
    humBtn.classList.toggle('active');
})

// サイドメニューのハンバーガーメニューをクリックしたときの反応
const sideBtns1 = document.getElementsByClassName('side-menuBtn1');
const sideBtns2 = document.getElementsByClassName('side-menuBtn2');
const sideBtns3 = document.getElementsByClassName('side-menuBtn3');
const sideBtns4 = document.getElementsByClassName('side-menuBtn4');
const sideBtns5 = document.getElementsByClassName('side-menuBtn5');
const backBtn1 = document.querySelector('.back-btn1');
const backBtn2 = document.querySelector('.back-btn2');
const backBtn3 = document.querySelector('.back-btn3');
const backBtn4 = document.querySelector('.back-btn4');
const backBtn5 = document.querySelector('.back-btn5');

sideBtns1[0].addEventListener('click',function(){
    content1[1].classList.add('active')    
});
backBtn1.addEventListener('click',function(){
    content1[1].classList.remove('active');
})

sideBtns2[0].addEventListener('click',function(){
    content2[1].classList.add('active')    
});
backBtn2.addEventListener('click',function(){
    content2[1].classList.remove('active');
})

sideBtns3[0].addEventListener('click',function(){
    content3[1].classList.add('active')    
});
backBtn3.addEventListener('click',function(){
    content3[1].classList.remove('active');
})
sideBtns4[0].addEventListener('click',function(){
    content4[1].classList.add('active')    
});
backBtn4.addEventListener('click',function(){
    content4[1].classList.remove('active');
})
sideBtns5[0].addEventListener('click',function(){
    content5[1].classList.add('active')    
});
backBtn5.addEventListener('click',function(){
    content5[1].classList.remove('active');
})
console.log(content5);