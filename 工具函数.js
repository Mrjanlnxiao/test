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




