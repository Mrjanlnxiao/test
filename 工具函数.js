// 检查对象是否为空
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// 等待一段时间再执行
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// 获取两个日期之间的日差
const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))

// 重定向到另一个 URL
const redirect = url => location.href = url;

// 检查设备上的触摸支持
const touchSupported = () => ('ontouchstart' in window || DocumentTouch && document instanceof DocumentTouch)

// 在元素后插入 HTML 字符串
const insertHTMLAfter = (html, el) => el.insertAdjacentHTML('afterend', html);

// 随机排列数组
const shuffle = arr => arr.sort(() => 0.5 - Math.random())

// 在网页上获取选定的文本
const getSelectedText = () => window.getSelection().toString();

// 获取随机布尔值
const getRandomBoolean = () => Math.random() >= 0.5

// 计算数组的平均值
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length

// 一大波正则表达式验证函数地址:https://juejin.cn/post/6844904090313424903

// multArray二维数组转换
const multArray = (arr,count = 2) => {
    let pages = [];
    arr.forEach((item,index) => {
        const page = Math.floor(index / count);
        (!pages[page]) && (pages[page] = []);
        pages[page].push(item)
    });
    return pages;
}
// multArray([1, 2, 3, 4, 5, 6], 2)
// => [[1, 2], [3, 4], [5, 6]]

// 扁平化数组
const flatten = arr => [].concat(...arr.map(item => (Array.isArray(item) ? flatten(item) : item)))
// flatten([1, [2], [3], [4, 5]])
// [1, 2, 3, 4, 5]

// ES6 Set Map WeakSet 和 WeakMap 详情：https://juejin.cn/post/7137677699039903758#heading-16
// ES6 Set方法 增删改查 set类似一个对象，里面的元素都是唯一的。所以可以用于数组去重
let s = new Set();
s.add(10).add(20).add(20);//20只被添加了一次
s.delete(10);//删除某个值，返回一个布尔值，表示删除是否成功
s.has(20);//返回一个布尔值，判断该值是否为Set的成员
s.clear();//清除所有成员，没有返回值
// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员

// ES6 Map方法 Map类型是键值对的有序列表，而键和值都可以是任意类型 Map本身是一个构造函数，用来生成 Map 数据结构
const m = new Map()
m.set('foo', true);
m.get('foo');
m.has('foo')//has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
m.delete('foo')//delete方法删除某个键，返回true。如果删除失败，返回false
// clear()clear方法清除所有成员，没有返回值

// WeakSet 和 WeakMap
const ws = new WeakSet();
// 在API中WeakSet与Set有两个区别：
// 没有遍历操作的API
// 没有size属性
const wm1 = new WeakMap();
// 在API中WeakSet与Set有两个区别：
// WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
// 没有遍历操作的API

// Array.from 把一个类似数组转为真实的数组
// 详情：https://blog.csdn.net/weixin_30553837/article/details/94783330?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166260598816800182775798%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166260598816800182775798&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-94783330-null-null.142^v47^pc_rank_34_default_3,201^v3^add_ask&utm_term=Array.from&spm=1018.2226.3001.4187

// 浅拷贝和深拷贝

// 浅拷贝：
// Object.assign方法，数组的 slice 和 concat 方法，数组静态方法 Array.from，扩展运算符

// 深拷贝
function deepClone (target, hash = new WeakMap()) { // 额外开辟一个存储空间WeakMap来存储当前对象
    if (target === null) return target // 如果是 null 就不进行拷贝操作
    if (target instanceof Date) return new Date(target) // 处理日期
    if (target instanceof RegExp) return new RegExp(target) // 处理正则
    if (target instanceof HTMLElement) return target // 处理 DOM元素

    if (typeof target !== 'object') return target // 处理原始类型和函数 不需要深拷贝，直接返回
  
    // 是引用类型的话就要进行深拷贝
    if (hash.get(target)) return hash.get(target) // 当需要拷贝当前对象时，先去存储空间中找，如果有的话直接返回
    const cloneTarget = new target.constructor() // 创建一个新的克隆对象或克隆数组
    hash.set(target, cloneTarget) // 如果存储空间中没有就存进 hash 里
  
    Reflect.ownKeys(target).forEach(key => { // 引入 Reflect.ownKeys，处理 Symbol 作为键名的情况
      cloneTarget[key] = deepClone(target[key], hash) // 递归拷贝每一层
    })
    return cloneTarget // 返回克隆的对象
  }

// 防抖函数
function debounce(fn,delay) {
    let timer = null; //通过闭包缓存了一个定时器
    return function () {
        const args = [...arguments];
        const that = this
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(that,args);
            fn()
        },delay);
    }
}

// 1、节流函数
    // 2、节流函数体
    function throttle(fn) {
        // 4、通过闭包保存一个标记
        let canRun = true;
        return function() {
          // 5、在函数开头判断标志是否为 true，不为 true 则中断函数
          if(!canRun) {
            return;
          }
          // 6、将 canRun 设置为 false，防止执行之前再被执行
          canRun = false;
          // 7、定时器
          setTimeout( () => {
            fn.call(this, arguments);
            // 8、执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
            canRun = true;
          }, 1000);
        };
    }




// map，set 深拷贝，防抖，节流，发布订阅着模式