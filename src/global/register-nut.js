/*
 * @Date: 2022-08-12 17:24:11
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-23 12:58:59
 * @FilePath: \gdutelc-recruit-wechat\src\global\register-nut.js
 * @description: none
 */
import {
  Button,
  Icon,
  Grid,
  GridItem,
  Form,
  FormItem,
  Cell,
  CellGroup,
  TextArea,
  Picker,
  RadioGroup,
  Radio,
  Popup,
  OverLay,
  Avatar,
  Steps,
  Step,
  Tag,
  Divider,
  Empty,
  Dialog,
} from "@nutui/nutui-taro";

const nutUIElmements = [
  Button,
  Icon,
  Grid,
  GridItem,
  Form,
  FormItem,
  Cell,
  CellGroup,
  TextArea,
  Picker,
  RadioGroup,
  Radio,
  Popup,
  OverLay,
  Avatar,
  Steps,
  Step,
  Tag,
  Divider,
  Empty,
  Dialog,
];

export const registerNut = (app) => {
  nutUIElmements.forEach((element) => {
    app.use(element);
  });
};
