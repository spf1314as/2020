function arrayLike (params) {
    if (params == null ) return false
    if (typeof params === 'function') return false
    if ('length' in params && typeof params.length === 'number') {
        if (params.length === 0) return true
        if (parseInt(params.length) === parseFloat(params.length) && (params.length - 1) in params) return true
        return false
    }
    return false

}

+function testArgument() {
    console.log(typeof arguments)
   
}()


