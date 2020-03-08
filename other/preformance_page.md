### 页面自身
1. 抽取公共代码
    - 提取公共组件
    - 抽象出公共方法函数
2. 代码按需加载:
    - 路由级按需加载页面 
    ``` javascript
    import(), resolve => require(['../components/PromiseDemo'], resolve)
    ``` 
    - 注释的方式指定模块名称 
    ``` javascript
    import(/*webpackChunkName:name*/'../index')
    ```
    - 页面内按需加载组件
3. 拆分代码，拆分成多个小文件
4. link标签
    - preload、prefetch 预加载资源 `<link rel="preload" as="script" href="foo.js">  `
    - dns-prefetch 预先进行dns解析
    - preconnect 预先建立资源请求连接 crossorigin="anonymous/use-credentials"
5. defer,async 关键的资源延时或异步加载，不阻碍页面的正常渲染
6. 静态资源使用多域名，浏览器同域同时链接数量限制最多为6个
7. 使用的第三方包，进行按需加载如iview lodash
8. 图片
    - 支持webp格式使用webp 相同效果下大小是原来的1/3或者1/2
        - 本地或者服务端进行图片格式转化
        - 服务端判断：根据请求头中accept字段中是否含有image/webp确定浏览器是否支持webp,返回对应类型的图片
        - 前端处理
            - 请求一张webp格式的图片，将加载结果写入cookie，页面再次加载时，直接读取cookie
            - 支持canvas时
            ```javascript
                let cas = doucment.createElement('canvas')
                cas.toDataURL('image/webp') => image/webp // 默认为image/png
            ```

    - 图片压缩
        - 手动压缩
        - webpack插件或者gulp插件
---
- server worker
- 骨架屏
### 打包构建
1. 提升构建速度
    - DLL (dynamic link libary) 将常用库单独打包，只构建一次。但配置复杂
    - hard-source-webpack-plugin 进行根据package.lock.json、yarn.lock.json或者是package.json生成hash值前后对比判断缓存是否有效，过期时间默认2天
    - happypack 多线程打包
2. 分包 optimize.splict 根据需要对代码进行分包，以及那些代码需要进行处理
3. babelrc 配置第三方babel插件实现第三方资源的按需加载
4. image-webpack-loader
    - 压缩图片
    - 转化为渐进式图片jpge
    - Compress JPG & PNG images into WEBP
5. url-loader 设置临界值，小于时使用dataurl
### 部署
1. cdn  就近进行资源分发
2. js、css、图片等静态资源的缓存策略


### 浏览器加载页面


### 服务端根据版本号生成html
根据版本号，使用html模板生成带有静态资源的完整html页面，实现部署的热更新
- 正在访问的页面，不会出现静态资源找不到报错的问题
- 页面的灵活上线、下线，快速回滚
- 上线版本的可追溯性