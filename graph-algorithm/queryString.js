
// www.baidu.com?a=b&c=d&name=li
// new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
function getSearch(name) {
    let str = 'a=b&c=d&name=li'
    let regexp = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')

  let res =   str.match(regexp)
  console.log(res)
  if (res) {
      if (res[1]) return res[1]
      return ''
  }
  return ''
}

console.log(getSearch('a'))