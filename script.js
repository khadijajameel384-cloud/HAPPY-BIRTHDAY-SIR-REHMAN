function go(page){
    document.body.style.opacity = 0;
    setTimeout(function(){
        window.location.href = page;
    }, 500);
}

//  confetti
function confetti(){
    for(var i = 0; i < 80; i++){
        var c = document.createElement("div");
        c.style.position = "fixed";
        c.style.width = "8px";
        c.style.height = "8px";
        c.style.background = "pink";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-10px";
        document.body.appendChild(c);
    }
}

//  fireworks
function fireworks(){
    setInterval(function(){
        var f = document.createElement("div");
        f.className = "firework";
        f.style.left = Math.random() * 100 + "vw";
        f.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(f);

        setTimeout(function(){
            f.remove();
        }, 1000);
    }, 300);
}