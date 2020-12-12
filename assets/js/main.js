// on page load
// social bar swoops in from right

// on scroll down
// social bar hides


var h = window.innerHeight;
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        document.getElementsByTagName('nav')[0].style.borderBottom = "2px solid #000621";
    } else {
        document.getElementsByTagName('nav')[0].style.borderBottom = "2px solid transparent";
    }
}
