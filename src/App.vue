<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {computed} from 'vue'

// 打印表结构的列结构
const printColumns = [
  { title: '单据编号', field: 'FBillID' },
  { title: '单据名称', field: 'FBillName' },
  { title: '打印模板类型', field: 'FPrintModel' },
  { title: '打印模板名称', field: 'FModelName' },
  { title: '默认样式', field: 'FIsDefault' },
  { title: '系统模块', field: 'FSysNo' }
];
// "lodash": "^4.17.21",
//     "vxe-table": "^4.3.0-beta.5",
//     "xe-utils": "^3.5.6",
</script>

<template>
  <VolTable
    ref="printTableRef"
    :height="1000"
    :paginationHide="true"
    :columns="printColumns"
  />

</template>

<style>
</style>

