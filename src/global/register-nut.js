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
  Input,
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
  Input,
];

export const registerNut = (app) => {
  nutUIElmements.forEach((element) => {
    app.use(element);
    console.log(element);
  });
};
