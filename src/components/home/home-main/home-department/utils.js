export const caculateWidth = (windowWidth, offset = 30) => {
  console.log(windowWidth);
  return Math.floor(+windowWidth / 2) - 30;
};
