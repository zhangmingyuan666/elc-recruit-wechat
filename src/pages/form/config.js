import { academyDataList, depList, sourceOfApproachELC } from "./data-config";
import { REQUIRED_RULES } from "./rules";

export const formConfig = [
  {
    tag: "input",
    prop: "name",
    label: "姓名",
    required: true,
    rules: [REQUIRED_RULES("姓名")],
  },
  {
    tag: "input",
    prop: "stu_id",
    label: "学号",
    required: true,
    rules: [
      REQUIRED_RULES("学号"),
      { regex: /^[1-9][0-9]{9}$/, message: "学号为10位数字" },
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
    rules: [REQUIRED_RULES("性别")],
  },
  {
    tag: "picker",
    label: "第一意向部门",
    prop: "first_dept",
    required: true,
    options: {
      columns: depList,
    },
    rules: [REQUIRED_RULES("部门")],
  },
  {
    tag: "picker",
    label: "第二意向部门",
    prop: "second_dept",
    options: {
      columns: depList,
    },
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
    prop: "has_join",
  },
  {
    tag: "input",
    label: "我掌握了",
    prop: "skill",
  },
  // {
  //   tag: "picker",
  //   label: "从哪里了解的电协",
  //   prop: "where_find",
  //   options: {
  //     columns: sourceOfApproachELC,
  //   },
  // },
  {
    tag: "textarea",
    label: "我的简介",
    prop: "profile",
    required: true,
  },
];
