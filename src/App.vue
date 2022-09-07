<script setup>
import { ref, version as vueVersion } from 'vue';
// import { version as EpVersion } from 'element-plus'
const msg = ref('Hello World!');
// 打印表结构的列结构
const printColumns = [
  { title: '单据编号', field: 'FBillID' },
  { title: '单据名称', field: 'FBillName' },
  { title: '打印模板类型', field: 'FPrintModel' },
  { title: '打印模板名称', field: 'FModelName' },
  { title: '默认样式', field: 'FIsDefault' },
  { title: '系统模块', field: 'FSysNo' },
];
</script>

<template>
  1234 123
  <!-- <VolTable
    ref="printTableRef"
    :height="1000"
    :paginationHide="true"
    :columns="printColumns"
  /> -->

  <h1>{{ msg }}</h1>
  <el-input v-model="msg" />
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <p>
    <!-- Element Plus {{ EpVersion }} + Vue {{ vueVersion }} -->
  </p>
</template>
