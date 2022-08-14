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
];

export const registerNut = (app) => {
  nutUIElmements.forEach((element) => {
    app.use(element);
  });
};
