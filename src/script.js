!function() {
    function e(e, n, t) {
        const s = e + 1e4 - n;
        document.getElementById("info").innerHTML = `Timer : ${(s/1e3).toFixed(1)}s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number : ${t}`
    }
    
    document.addEventListener("DOMContentLoaded", function() {
      let n, t, s = !1, i = 0;
        document.getElementById("clicker").addEventListener("mousedown", function(c) {
            c.isTrusted && (s ? (new Date).getTime() < t + 1e4 && i++ : (i++, s = !0, document.getElementById("cps").innerText = "", t = (new Date).getTime(), n = setInterval(function() {
                (new Date).getTime() < t + 1e4 ? e(t, (new Date).getTime(), i) : (e(t, t + 1e4, i), clearInterval(n), document.getElementById("cps").innerText = `${(i/10).toFixed(1)} CPS !`, setTimeout(function() {
                    s = !1, i = 0
                }, 1e3))
            }, 100)))
        })
    })
} ();
