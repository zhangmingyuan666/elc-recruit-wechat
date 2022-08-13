import { academyDataList, depList, sourceOfApproachELC } from "./data-config";

export const formConfig = [
  {
    tag: "input",
    prop: "name",
    label: "姓名",
    required: true,
  },
  {
    tag: "input",
    prop: "stu_id",
    label: "学号",
    required: true,
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
  },
  {
    tag: "picker",
    label: "第一意向部门",
    prop: "first_dept",
    required: true,
    options: {
      columns: depList,
    },
  },
  {
    tag: "picker",
    label: "第二意向部门",
    prop: "second_dept",
    required: true,
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
  },
  {
    tag: "input",
    label: "所属专业",
    prop: "major",
    required: true,
  },
  {
    tag: "input",
    label: "所属班级",
    prop: "clazz",
    required: true,
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
  {
    tag: "picker",
    label: "从哪里了解的电协",
    prop: "where_find",
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
