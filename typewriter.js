
window.onload = function() {
    var i = 0;
    var txt = '安心してマタニティライフを満喫！出産休業等支援金サービス';
    var speed = 50; // 文字が表示される速度

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typewriter").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}