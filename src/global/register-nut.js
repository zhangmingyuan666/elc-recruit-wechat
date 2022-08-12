import { Button, Image } from "@nutui/nutui-taro";

const nutUIElmements = [Button, Image];

export const registerNut = (app) => {
  nutUIElmements.forEach((element) => {
    app.use(element);
    console.log(element);
  });
};
