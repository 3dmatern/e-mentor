if(window.location.toString().indexOf('index.html')>0)
{
    function clickButtonScroll(btn, section){
        function handleButtonClick() {
            section.scrollIntoView({behavior: "smooth"});
        }
        btn.addEventListener('click', handleButtonClick);
    }
    
    const direction_btn = document.querySelector('#direction_btn');
    const courses = document.querySelector("#courses");
    clickButtonScroll(direction_btn, courses);
    
    const header__next_btn = document.querySelector('.header__next_btn');
    const learn = document.querySelector("#learn");
    clickButtonScroll(header__next_btn, learn);    
}

if(window.location.toString().indexOf('course.html')>0)
{
    function clickButtonСollapse(btn, text, img){
        function handleButtonClick() {
            text.classList.toggle("d-none");
            btn.classList.toggle("question__card_btn");
        }
        btn.addEventListener('click', handleButtonClick);
    }

    let question__card_btn_1 = document.querySelector('.question__card_btn_1');
    let question__card_text_1 = document.querySelector('.question__card_text_1');
    let question__card_btn_img_1 = document.querySelector('.question__card_btn_img_1');
    clickButtonСollapse(question__card_btn_1, question__card_text_1, question__card_btn_img_1);

    let question__card_btn_2 = document.querySelector('.question__card_btn_2');
    let question__card_text_2 = document.querySelector('.question__card_text_2');
    let question__card_btn_img_2 = document.querySelector('.question__card_btn_img_2');
    clickButtonСollapse(question__card_btn_2, question__card_text_2, question__card_btn_img_2);
    
    let question__card_btn_3 = document.querySelector('.question__card_btn_3');
    let question__card_text_3 = document.querySelector('.question__card_text_3');
    let question__card_btn_img_3 = document.querySelector('.question__card_btn_img_3');
    clickButtonСollapse(question__card_btn_3, question__card_text_3, question__card_btn_img_3);
    
    let question__card_btn_4 = document.querySelector('.question__card_btn_4');
    let question__card_text_4 = document.querySelector('.question__card_text_4');
    let question__card_btn_img_4 = document.querySelector('.question__card_btn_img_4');
    clickButtonСollapse(question__card_btn_4, question__card_text_4, question__card_btn_img_4);
    
    let question__card_btn_5 = document.querySelector('.question__card_btn_5');
    let question__card_text_5 = document.querySelector('.question__card_text_5');
    let question__card_btn_img_5 = document.querySelector('.question__card_btn_img_5');
    clickButtonСollapse(question__card_btn_5, question__card_text_5, question__card_btn_img_5);
}
