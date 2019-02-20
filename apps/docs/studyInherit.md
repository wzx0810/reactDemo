# JS继承的实现方式

## 定义一个动物类
```jsx
function Animal(name) {
    this.name = name || 'animal'
    this.sleep = function() {
        console.log(this.name + '正在睡觉');
    }
}
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food)
}
```
## 1.原型链继承

** 核心： 将父类的实例作为子类的原型 **

```jsx
function Cat() {
    
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

let cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);
```

** 特点： **

非常纯粹的继承关系，实例是子类的实例，也是父类的实例

父类新增原型方法/原型属性，子类都能访问到

简单，易于实现

** 缺点： **

要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中

无法实现多继承

来自原型对象的引用属性是所有实例共享的（详细请看附录代码： 示例1）

创建子类实例时，无法向父类构造函数传参

## 2.构造继承

** 核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型） **

```jsx
function Cat1(name) {
    Animal.call(this);
    this.name = name || 'Tom'
}

let cat1 = new Cat1();
console.log(cat1.name);
console.log(cat1.sleep());
console.log(cat1 instanceof Animal);
console.log(cat1 instanceof Cat1);
```

** 特点： **

解决了1中，子类实例共享父类引用属性的问题

创建子类实例时，可以向父类传递参数

可以实现多继承（call多个父类对象）

** 缺点： **

实例并不是父类的实例，只是子类的实例

只能继承父类的实例属性和方法，不能继承原型属性/方法

无法实现函数复用，每个子类都有父类实例函数的副本，影响性能   

## 3.实例继承

** 核心：为父类实例添加新特性，作为子类实例返回 ** 

```jsx
function Cat2(name) {
    let instance = new Animal();
    instance.name = name || 'Tom';
    return instance
}

let cat2 = new Cat2();
console.log(cat2.name);
console.log(cat2.sleep());
console.log(cat2 instanceof Animal);
console.log(cat2 instanceof Cat2);
```

** 特点： **

不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果

** 缺点： **

实例是父类的实例，不是子类的实例

不支持多继承

## 4.拷贝继承

```jsx
function Cat3(name) {
    let animal = new Animal();
    for(let p in animal) {
        Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'Tom'
}

let cat3 = new Cat3();
console.log(cat3.name);
console.log(cat3.sleep());
console.log(cat3 instanceof Animal);
console.log(cat3 instanceof Cat3);
```

** 特点： **

支持多继承

** 缺点： **

效率较低，内存占用高（因为要拷贝父类的属性）

无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）

## 5.组合继承

** 核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用 **

```jsx
function Cat4(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}
Cat4.prototype = new Animal();
Cat4.prototype.constructor = Cat;

let cat4 = new Cat4();
console.log(cat4.name);
console.log(cat4.sleep());
console.log(cat4 instanceof Animal);
console.log(cat4 instanceof Cat4);
```

** 特点： **

弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法

既是子类的实例，也是父类的实例

不存在引用属性共享问题

可传参

函数可复用

** 缺点： **

调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

## 6.寄生组合继承

** 核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点 **

```jsx
function Cat5(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}
(function() {
    let Super = function() {};
    Super.prototype = Animal.prototype;
    Cat5.prototype = new Super();
})();
Cat5.prototype.constructor = Cat5;

let cat5 = new Cat5();
console.log(cat5.name);
console.log(cat5.sleep());
console.log(cat5 instanceof Animal);
console.log(cat5 instanceof Cat5);
```

** 特点： **

堪称完美

** 缺点： **

实现较为复杂


































