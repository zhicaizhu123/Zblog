import Vue from 'vue';

import {
  Message,
  MessageBox,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Form,
  FormItem,
  Loading,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  Option,
  Upload,
  Image
} from 'element-ui'; // 引入Button按钮

const MessageInstance = {};
MessageInstance.install = function (Vue, options) {
  Vue.prototype.$message = Message;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$prompt = MessageBox.prompt;
};

export default () => {
  Vue.use(Button);
  Vue.use(Dropdown);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Input);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Loading);
  Vue.use(RadioButton);
  Vue.use(RadioGroup);
  Vue.use(Radio);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(Upload);
  Vue.use(MessageInstance);
  Vue.use(Image);
};
