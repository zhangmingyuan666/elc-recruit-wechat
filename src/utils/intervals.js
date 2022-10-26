/*
 * @Date: 2022-10-25 17:14:49
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-25 17:21:00
 * @FilePath: \gdutelc-recruit-wechat\src\utils\intervals.js
 * @description: none
 */
// 使用setTimeout实现setInterval
function timeout(timer, callback, ms) {
  return new Promise((resolve) => {
    timer = setTimeout(() => {
      callback();
      resolve("req");
      clearTimeout(timer);
      timer = null;
    }, ms);
  });
}
export async function createInterval(callback, ms = 5000) {
  let timer = null;
  await timeout(timer, callback, ms);
  await createInterval(callback, ms);
}
