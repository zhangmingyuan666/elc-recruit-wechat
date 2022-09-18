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
];

export const registerNut = (app) => {
  nutUIElmements.forEach((element) => {
    app.use(element);
  });
};
