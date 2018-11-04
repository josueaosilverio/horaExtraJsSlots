var score = 0, pontos = 5;
function jogar() {
    var e = Math.abs(document.getElementById("aposta").value), t = 0;
    document.getElementById("intro").style.display = "none", document.getElementById("jogo").style.display = "block", document.getElementById("playAgain").disabled = !0, document.getElementById("changeBet").disabled = !0;
    var n = Math.floor(10 * Math.random()), o = Math.floor(10 * Math.random()), d = Math.floor(10 * Math.random());
    n == o && t++, n == d && t++, o == d && t++, 1 == t && t++, 0 == t ? score -= 2 * e * pontos : score += e * Math.pow(pontos, t), setTimeout(function () {
        document.getElementById("slot1").innerText = n.toString(), setTimeout(function () {
            document.getElementById("slot2").innerText = o.toString(), setTimeout(function () {
                document.getElementById("slot3").innerText = d.toString(), document.getElementById("score").innerText = score.toString(), document.getElementById("playAgain").removeAttribute("disabled"), document.getElementById("changeBet").removeAttribute("disabled")
            }, 300)
        }, 300)
    }, 300)
}
function changeBet() {
    document.getElementById("intro").style.display = "block", document.getElementById("jogo").style.display = "none"
}
document.getElementById("play").onclick = jogar, document.getElementById("playAgain").onclick = jogar, document.getElementById("changeBet").onclick = changeBet;
