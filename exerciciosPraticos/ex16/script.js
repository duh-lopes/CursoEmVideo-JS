

function contar() {
    let ini = document.getElementById('txtinicio').value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpasso').value
    let res = document.getElementById('res').value

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (1 < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
