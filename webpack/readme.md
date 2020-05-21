1. webpack 模块化
    plugin 是webpack的基础组成 功能扩展
2. 声明周期 tap asyncTap
    - compiler的关键声明周期 
        - compilation 编译(compilation)创建之后，执行插件;重点是执行插件， 参数 compilation
        - make 
        - emit 生成资源到 output 目录之前； 可以获取到编译生成的打包后的资源文件 ，参数compilation， cdn资源文件上传在这个阶段可以获得资源

        - afterEmit 生成资源到 output 目录之后； 参数compilation
        - done  完成编译后  参数stats
        - fail 编译失败  参数 error
    - compalition seal unseal optimize
3. html-webpack-plugin  after-asset-tags  before-html-processing
``` javascript
function AddcrossOrigin (options) {
  this.options = options || {}
}
AddcrossOrigin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', compilation => {
    compilation.plugin(
      'html-webpack-plugin-alter-asset-tags',
      (data, cb) => {
        // [{"tagName":"link","selfClosingTag":false,"attributes":{"href":"/static/css/app.ca25db353c4d2795ff0f62a94ef7e83b.css","rel":"stylesheet"}}]
        let {corssOrigin, disabled = true} = this.options
        if (!disabled) {
          for (let item of [...data.head, ...data.body]) {
            let {tagName, attributes} = item
            if (tagName === 'script' && !!attributes.src) {
              attributes.crossOrigin = corssOrigin || ''
            }
          }
        }
        cb(null, data) // head: [{}],body [{}]
      }
    )
  })

}

module.exports = AddcrossOrigin
```
