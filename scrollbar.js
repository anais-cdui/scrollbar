window.onscroll=function () {
    scroll_indicator();
}

let content_height = document.documentElement.scrollHeight;
let display_height = document.documentElement.clientHeight;
let height = content_height - display_height;

function scroll_indicator() {
    let window_scroll = window.scrollY;
    let scrolled = (window_scroll/height)*100;
    document.getElementById('bar').style.width = scrolled + "%";
}