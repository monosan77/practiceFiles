//--------------------------- 
// 時間経過で発生するイベント
// --------------------------
const menu_movein = document.querySelector('#js-menuR');
window.setTimeout(function(){
    menu_movein.classList.add('movein');
},1000);

// ---------------------------
// pop-upするやつの設定
// ---------------------------
// サイト開いたときに時間でポップアップする
const popUp = document.querySelector('#js-popUp');
const popUpSp = document.querySelector('#js-pop-openBtn-SP');
window.setTimeout(function(){
    popUp.classList.add('active');
},1500);

// バックボタン押したら閉じる
const popUpBtn = document.querySelector('#js-popUp-backBtn');
popUpBtn.addEventListener('click',function(){
    popUp.classList.toggle('close');
    popUpBtn.classList.toggle('close');
})
// 閉じているときに「建売～」をクリックすると開くようにする
const popUpTitle = document.querySelector('#js-title-popUp');
popUpTitle.addEventListener('click',function(){
    popUp.classList.remove('close');
    popUpBtn.classList.remove('close');
})
// SP の時のポップアップを開くボタンを押したときのイベント
popUpSp.addEventListener('click',function(){
    popUp.classList.remove('close');
    popUpBtn.classList.remove('close');
})


//------------------------------
// ハンバーガーメニュ
// -----------------------------
const hamBtn = document.querySelector('#js-hamBtn');
const headNavi = document.querySelector('#js-headNavi');
const siteTitle = document.querySelector('#js-site-title');

hamBtn.addEventListener('click',function(){
    hamBtn.classList.toggle('open');
    headNavi.classList.toggle('open');
    siteTitle.classList.toggle('open');
})

// ----------------------------------
// ポップダウンボタンを押したときの設定
// -----------------------------------
const popD = document.querySelector('#js-popdown');
const menuBtn = document.querySelector('#js-menuBtn');
const backBtn = document.querySelector('#js-backBtn');

menuBtn.addEventListener('click',function(){
    
    menu_movein.classList.remove('movein');
    window.setTimeout(function(){
        popD.classList.add('open');
    },300)
    
})
backBtn.addEventListener('click',function(){
    popD.classList.remove('open');
    window.setTimeout(function(){
        menu_movein.classList.add('movein');
    },300)
})

// ----------------------------
// ページトップに自動スクロールするボタン
// ----------------------------
const pageTopBtn = document.querySelector('#js-page-topBtn');
const windwH = window.innerHeight;

// スクロールすると自動でフェードイン
window.addEventListener('scroll',function(){
    target_scroll = this.window.scrollY;
    if(target_scroll > 1000){
        pageTopBtn.classList.add('active');
    }else{
        pageTopBtn.classList.remove('active');
    }
})

pageTopBtn.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
})