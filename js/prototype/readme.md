1. 继承的种类 常用方法
    - 原型链 Sub.prototype = new Super()
    - 借用构造函数 Super.call(this) Super.apply(this)
    - 寄生继承
    - 原型继承 Object.create()
    - 寄生组合继承：`寄生+借用构造函数`>借用构造函数：继承实例属性；寄生：继承原型对象上的属性方法，还能够维持原型链
    - 组合继承`原型链+借用构造函数`>原型链：继承原型上的属性、方法；借用构造函数：继承实例上的属性和方法
2. 原型的判断 
    - instanceof 原型链上上的构造函数中是否出现过
    - isPrototypeOf() 圆形脸上是否出现过
3. 实例的判断
4. 构造函数之间的关系
5. Object.create 实现