window.onscroll = debounce(function() {
    // console.log(window.pageYOffset)
    // console.log(window.innerHeight)
    // console.log(container.scrollHeight, 'scrollHeight')
    // console.log(container.clientHeight, 'clientHeight')
    // console.log(container.offsetHeight, 'offsetHeight')
    // console.log(document.body.scrollTop, 'scrollTop')
    // console.log(container.offsetTop, 'offsetTop')
    lazy(10)
})
function debounce(fn, delay = 200) {
    let timer = null
    return function () {
        !!timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, [...arguments])
        }, delay);
    }
    
}

function lazy (distance) {
    distance = parseFloat(distance)
    let elemList = [...document.getElementsByClassName('lazy')]
    let elemStyleList = []
    let windowValidHeight = parseFloat(window.innerHeight)
    for (let item of elemList) {
        let elemRect = item.getBoundingClientRect()
        if (elemRect.top > distance + windowValidHeight ) {
        }
        let {pageXOffset, pageYOffset} = window
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        Object.assign(elemRect, {pageYOffset, pageXOffset, scrollTop})
        elemStyleList.push(elemRect)
    }
    console.log(elemStyleList)
}