/**
 * 公共函数，获取一个随机数
 * @param min 范围区间
 * @param max 范围区间
 */
const getRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min)) + min
);

/**
 * setTimeout异步获取一个随机数
 * @param callback 500ms之后执行callback(getRandomInt)并传入随机数
 */
export const fetchCounter = (callback) => {
  setTimeout(() => {
    callback(getRandomInt(1, 100))
  }, 500)
};
