import {
  Button,
  Icon,
  Grid,
  GridItem,
  Form,
  FormItem,
  Cell,
  CellGroup,
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
];

export const registerNut = (app) => {
  nutUIElmements.forEach((element) => {
    app.use(element);
    console.log(element);
  });
};
