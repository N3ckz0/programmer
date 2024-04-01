window.addEventListener("scroll", function(){
    var header = document.getElementById("header")
    if (window.scrollY>0) {
        header.style.backgroundColor="var(--purpleII)";
    }else{
        header.style.backgroundColor="transparent";
    }
})