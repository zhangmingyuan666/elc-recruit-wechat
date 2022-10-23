import { academyDataList, depList, sourceOfApproachELC } from "./data-config";
import { REQUIRED_RULES } from "./rules";

export const formConfig = [
  {
    tag: "input",
    prop: "name",
    label: "姓名",
    required: true,
    rules: [
      REQUIRED_RULES("姓名"),
      { regex: /^[\u4E00-\u9FA5]{1,20}$/, message: "姓名长度小于20，且为中文" },
    ],
  },
  {
    tag: "input",
    prop: "stuId",
    label: "学号",
    required: true,
    rules: [
      REQUIRED_RULES("学号"),
      { regex: /^[1-9][0-9]{9}$/, message: "学号为10位数字" },
    ],
  },
  {
    tag: "input",
    prop: "phone",
    label: "联系电话",
    required: true,
    rules: [
      REQUIRED_RULES("联系电话"),
      { regex: /^[1-9][0-9]{10}$/, message: "联系电话为11位数字" },
    ],
  },
  {
    tag: "radio",
    prop: "gender",
    label: "性别",
    required: true,
    options: {
      children: [
        {
          label: 1,
          content: "男",
        },
        {
          label: 2,
          content: "女",
        },
      ],
    },
    rules: [],
  },
  {
    tag: "picker",
    label: "第一意向部门",
    prop: "firstDept",
    required: true,
    options: {
      columns: depList,
    },
    rules: [REQUIRED_RULES("部门")],
  },
  {
    tag: "picker",
    label: "第二意向部门",
    prop: "secondDept",
    required: true,
    options: {
      columns: depList,
    },
    rules: [REQUIRED_RULES("第二部门")],
  },
  {
    tag: "picker",
    label: "所属学院",
    prop: "college",
    required: true,
    options: {
      columns: academyDataList,
    },
    rules: [REQUIRED_RULES("学院")],
  },
  {
    tag: "input",
    label: "所属专业",
    prop: "major",
    required: true,
    rules: [REQUIRED_RULES("专业")],
  },
  {
    tag: "input",
    label: "所属班级",
    prop: "clazz",
    required: true,
    rules: [REQUIRED_RULES("班级")],
  },
  {
    tag: "input",
    label: "已经加入的组织",
    prop: "hasJoin",
  },
  {
    tag: "input",
    label: "我掌握了",
    prop: "skill",
  },
  {
    tag: "picker",
    label: "从哪里了解的电协",
    prop: "whereFind",
    options: {
      columns: sourceOfApproachELC,
    },
  },
  {
    tag: "textarea",
    label: "我的简介",
    prop: "profile",
    required: true,
  },
];
