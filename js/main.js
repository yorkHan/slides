let n
innt.call()
setInterval(function () {
    mkLeave($(getImg(n))).one('transitionend',function (e) {
     mkEnter($(e.currentTarget)) 
    })
    mkCurrent($(getImg(n+1)))
    n++
},3000)

function x(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }
    return n
}

function getImg(n) {
    return `.images>img:nth-child(${x(n)})`
}

function innt() {
    n=1
    $(`.images>img:nth-child(${x(n)})`).addClass('current').siblings().addClass('enter')
}

function mkCurrent($node) {
    $node.removeClass('enter leave').addClass('current')
}
function mkLeave($node) {
    $node.removeClass('current enter').addClass('leave')
    return $node 
}
function mkEnter($node) {
    $node.removeClass('leave current').addClass('enter')   
}