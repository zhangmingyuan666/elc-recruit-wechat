<template>
  <nut-grid
    :column-num="gridConfig.column"
    :gutter="gridConfig.gutter"
    class="mt-4"
    :border="false"
  >
    <template
      v-for="(department, index) of departmentList"
      :key="department.desc"
    >
      <nut-grid-item>
        <HomeDepartmentItem
          :department="department"
          :index="index + 1"
        ></HomeDepartmentItem>
      </nut-grid-item>
    </template>
  </nut-grid>
</template>

<script setup>
import { departmentList, gridConfig } from "./config";
import HomeDepartmentItem from "./home-department-item";
</script>
