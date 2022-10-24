window.onscroll = () =>{
    let value = window.scrollY;
    document.querySelector('.text').style.top = -value * 1 + 'px';

}