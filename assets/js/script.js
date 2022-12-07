window.onload = function () {
    document.querySelector(".menu-opener").addEventListener("click", function () {
        if (document.querySelector(".menu_area nav").style.display == 'none') {
            document.querySelector(".menu_area nav").style.display = 'block';
        }
        else {
            document.querySelector(".menu_area nav").style.display = 'none';
        }
    })
}