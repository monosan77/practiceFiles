// ---------------------------------------
// mainvisual 横のカウント設定
// ---------------------------------------

const pageN = document.getElementsByClassName('js-pagenation');
const Number = document.getElementsByClassName('js-num');

let num = -60;
let i = 0;
let AAA=1;
function loopPoint(){
    while(i<9999){
        window.setTimeout(function(){            
            

            Number[0].remove();
            
            const span = document.createElement("span");
            span.className = 'js-num';
            const text1 = document.createTextNode("0"+ AAA);
            span.appendChild(text1);
            pageN[0].appendChild(span);
            AAA = AAA + 1;
            if(AAA === 9){
                AAA=1;
            }
            
        },5000 + (i * 5000));
        i++;
    }
}
loopPoint();
console.log(Number)

// ---------------------------------------
// スクロール時のフェードイン設定
// ---------------------------------------

const I_news = document.getElementById('index-news');
const I_about = document.getElementById('index-about');
const I_service = document.getElementById('index-service');
const I_works = document.getElementsByClassName('js-works-item');
const I_company = document.getElementById('company_FAQ');
const innerH = window.innerHeight -100;
console.log(I_works);
window.addEventListener('scroll',function(){
    target_news = I_news.getBoundingClientRect().top;
    target_about = I_about.getBoundingClientRect().top;
    target_service = I_service.getBoundingClientRect().top;
    target_company = I_company.getBoundingClientRect().top;
    if(innerH > target_news){
        I_news.classList.add('active');
    }
    if(innerH > target_about){
        I_about.classList.add('active');
    }
    if(innerH > target_service){
        I_service.classList.add('active');
    }

    for(i = 0; i < I_works.length; i++){
        target_works = I_works[i].getBoundingClientRect().top

        if(innerH > target_works){
            I_works[i].classList.add('active');
        }
    }
    if(innerH > target_company){
        I_company.classList.add('active');
    }
    
})

// ---------------------------------------
// SP　時のメニューボタン
// ---------------------------------------
const SPmenu = document.getElementsByClassName('SP-menu');
const SPBTNS = document.getElementsByClassName('SP-btn');
const SPbtn = document.getElementById('js-menu-btn');
const SPclose = document.getElementById('js-close-btn');

SPbtn.addEventListener('click',function(){
    SPBTNS[0].classList.add('active');
    SPmenu[0].classList.add('active');
});
SPclose.addEventListener('click',function(){
    SPBTNS[0].classList.remove('active');
    SPmenu[0].classList.remove('active');
})
console.log(SPBTNS)