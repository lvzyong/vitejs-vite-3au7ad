<!-- <script setup>
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
</style> -->


<!--
 *Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/zkaps/sd/t_SdOrder.js此处编写
 -->
 <template>
  <view-grid
    ref="grid"
    :columns="columns"
    :editFormFields="editFormFields"
    :editFormOptions="editFormOptions"
    :searchFormFields="searchFormFields"
    :searchFormOptions="searchFormOptions"
    :table="table"
    :extend="extend"
    :pageBoxType="pageBoxType"
    :defaultLoadPage="defaultLoad"
    :attachment="vueOption.attachment"
    :vueOption="vueOption"
  ></view-grid>
</template>

<script>
//import extend from '@/extension/zkaps/sd/t_SdOrder.js';
// import ViewGrid from '@/components/basic/ViewGrid.vue';

export default {
  // components: {
  //   ViewGrid
  // },
  props: {
    pageBoxType: String,
    defaultLoad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      vueOption: {
        attachment: true
      },
      // fastWheres: [], // 快询条件 快查条件 会清空
      // wheres: [], // 查询条件固定 测试{ name: 'cStatus', value: "cStatus in ('A','I')", ParamType: '3' }
      table: {
        key: 'iInterID', // 主键字段
        keyCode: 'cSdOrderNo', // 单据编号字段
        footer: 'Foots',
        cnName: '销售订单',
        name: 'sd/t_SdOrder',
        url: '/t_SdOrder/',
        sortName: 'iInterID',
        detailTable: [
          {
            keyCodeColumn: 'cInvCode', // 保存时候这个字段的值是空的则删除这一行
            clsKey: 'iSdLineID', // 明细主键
            keyCode: 'cSdOrderNo', //
            cnName: '销售订单明细', // 分表名称
            tableName: 't_SdOrderEntry', // 分表名
            foreignKey: 'iInterID' // 外键
            // addNum: 1,
            // custom: 'views',
            // path: 'zkaps/sd/t_SdOrderEntry'
          }
        ],
        Print: {
          // 打印类型
          IbillTypeID: '33',
          dataTable: 't_SdOrder', // 设什么取什么
          dtMain: 'v_SdOrderHead', // 主表数据
          dtDetail: 'v_SdOrderEntry', // 明细数据
          detailAddwhere: '', // 明细条件
          dtDetail2: '', // 明细2数据
          detail2Addwhere: '', // 明细2条件
          dtDetail3: '', // 明细3数据
          detail3Addwhere: '', // 明细3条件
          dtDetail4: '', // 明细4数据
          detail4Addwhere: '', // 明细4条件
          dtDetail5: '', // 明细5数据
          detail5Addwhere: '', // 明细5条件
          Type: 'APS.Sale.FrmSdOrder'
        }
      },
      extend: {},
      editFormFields: {
        cSdOrderNo: '',
        cCustNo: '',
        dDate: '',
        cStatus: '',
        cCustOrderNo: '',
        cSTCode: '',
        cBusType: '',
        cCustName: '',
        cDeptNo: '',
        cPersonCode: '',
        cGatheringplan: '',
        cCusPhoneNum: '',
        cExch_name: '',
        iExchRate: '',
        iTaxRate: '',
        cAddCode: '',
        cAddress: '',
        cDefine10: '',
        iRcvAmount: '',
        cProjectNo: '',
        cNote: '',
        cSdOrderType: ''
      },
      editFormOptions: [
        [
          {
            title: '订单号',
            field: 'cSdOrderNo',
            type: 'text',
            required: true,
            editable: false, // 不可编辑
            attach: true // 附件
          },
          {
            dataKey: 'dDate',
            title: '单据日期',
            field: 'dDate',
            type: 'date',
            required: true
          },

          {
            dataKey: 'cSTCode',
            data: [],
            title: '销售类型',
            field: 'cSTCode',
            type: 'select',
            required: true
          },
          {
            dataKey: 'status',
            data: [],
            title: '状态',
            field: 'cStatus',
            type: 'select',
            required: true,
            editable: false // 不可编辑
          }
        ],
        [
          {
            dataKey: 'cBusType',
            data: [],
            title: '业务类型',
            field: 'cBusType',
            type: 'select',
            required: true
          },
          {
            field: 'cCustNo',
            title: '客户编号',
            type: 'BaseInfo',
            width: 120,
            align: 'left',
            required: true,
            baseInfoTable: {
              path: 't_Customer',
              baseInfoData: {
                cCustNo: 'cCustNo',
                cCustName: 'cCustName'
              }
            }
          },
          {
            title: '客户名称',
            field: 'cCustName',
            type: 'text',
            editable: false // 不可编辑
          },
          { title: '顾客', field: 'cCustOrderNo', type: 'text' }
        ],
        [
          {
            title: '业务员',
            field: 'cPersonCode',
            type: 'BaseInfo',
            baseInfoTable: {
              path: 't_Person',
              baseInfoData: { cPersonCode: 'cPsn_Num', cDeptNo: 'cDepCode' },
              getColumnNameSQL:
                'select cPsn_Num as [key],cPsn_Name as [value] from t_Person where cPsn_Num = "{0}"'
            },
            required: true
          },
          {
            title: '销售部门',
            field: 'cDeptNo',
            type: 'BaseInfo',
            required: true,
            baseInfoTable: {
              path: 't_Department',
              baseInfoData: { cDeptNo: 'cDepCode' },
              getColumnNameSQL:
                'select cDepCode as [key],cDepName as [value] from t_Department where cDepCode = "{0}"'
            }
          },
          {
            title: '收付款协议',
            field: 'cGatheringplan',
            type: 'BaseInfo',
            baseInfoTable: {
              path: 'DataDictionary',
              treewhere: 'DictionaryName in ("SdOrder","cGatheringplan")',
              baseInfoData: { cGatheringplan: 'DictionaryKey' },
              getColumnNameSQL:
                'select DictionaryKey as [key],DictionaryValue as [value] from DataDictionary where DictionaryKey = "{0}"'
            }
          },
          { title: '联系电话', field: 'cCusPhoneNum', type: 'text' }
        ],
        [
          {
            title: '发货仓库',
            field: 'cDefine10',
            type: 'BaseInfo',
            baseInfoTable: {
              path: 't_WHSeat',
              baseInfoData: { cDefine10: 'cWhNo' },
              getColumnNameSQL:
                'select cWhNo as [key],cWHName as [value] from t_WHSeat where cWhNo = "{0}"'
            }
          },
          {
            dataKey: 'cSCCode',
            data: [],
            title: '发货方式',
            field: 'cSCCode',
            type: 'select'
          },
          {
            dataKey: 'cCurrency',
            data: [],
            title: '币种',
            field: 'cExch_name',
            type: 'select'
          },
          {
            title: '汇率',
            field: 'iExchRate',
            type: 'number'
          }
        ],
        [
          {
            title: '税率%',
            field: 'iTaxRate',
            type: 'number',
            min: 0,
            max: 100
          },
          {
            title: '发货地址',
            field: 'cAddress',
            type: 'text'
          },
          { title: '项目号', field: 'cProjectNo', type: 'text' },
          {
            title: '客户余额',
            field: 'iRcvAmount',
            type: 'text'
          }
        ],
        [
          {
            title: '订单类型',
            field: 'cSdOrderType',
            type: 'text',
            colSize: 3
          },
          { title: '备注', field: 'cNote', type: 'text', colSize: 9 }
        ]
      ],
      searchFormFields: {
        cSdOrderNo1: '',
        cSdOrderNo2: '',
        cCustNo1: '',
        cCustNo2: '',
        dDate1: '',
        dDate2: '',
        dCheckDate1: '',
        dCheckDate2: '',
        cSTCode: '',
        cBusType: '',
        cInvCode: '',
        cItemClsNo: '',
        cInvName: '',
        cSdOrderType: '',
        cPriorityType: '',
        cPersonCode: '',
        cDeptNo: '',
        cStatus: '',
        cOperator: ''
      },
      searchFormOptions: [
        [
          {
            scope: true,
            title: '销售订单号',
            field: 'cSdOrderNo',
            options: [
              {
                field: 'cSdOrderNo1',
                type: 'text',
                title: '销售订单号',
                baseInfoTable: {
                  path: 't_SdOrder',
                  baseInfoData: {
                    cSdOrderNo1: 'cSdOrderNo',
                    cSdOrderNo2: 'cSdOrderNo'
                  }
                }
              },
              {
                field: 'cSdOrderNo2',
                type: 'text',
                title: '销售订单号',
                baseInfoTable: {
                  path: 't_SdOrder',
                  baseInfoData: { cSdOrderNo2: 'cSdOrderNo' }
                }
              }
            ]
          },
          {
            scope: true,
            title: '客户编号',
            field: 'cCustNo',
            options: [
              {
                field: 'cCustNo1',
                title: '客户编号',
                type: 'BaseInfo',
                baseInfoTable: {
                  path: 't_SdOrder',
                  baseInfoData: {
                    cCustNo1: 'cCustNo',
                    cCustNo2: 'cCustNo'
                  }
                }
              },
              {
                field: 'cCustNo2',
                title: '客户编号',
                type: 'BaseInfo',
                baseInfoTable: {
                  path: 't_SdOrder',
                  baseInfoData: { cCustNo2: 'cCustNo' }
                }
              }
            ]
          },
          {
            scope: true,
            title: '单据日期',
            field: 'dDate',
            options: [
              {
                field: 'dDate1',
                title: '单据日期',
                type: 'date',
                baseInfoTable: {
                  path: 't_SdOrder',
                  baseInfoData: {
                    dDate1: 'dDate',
                    dDate2: 'dDate'
                  }
                }
              },
              {
                field: 'dDate2',
                title: '单据日期',
                type: 'date',
                baseInfoTable: {
                  path: 't_SdOrder',
                  baseInfoData: { dDate2: 'dDate' }
                }
              }
            ]
          },
          {
            scope: true,
            title: '审核日期',
            field: 'dCheckDate',
            options: [
              {
                field: 'dCheckDate1',
                title: '审核日期',
                type: 'date',
                baseInfoTable: {
                  path: 't_SdOrder',
                  baseInfoData: {
                    dCheckDate1: 'dCheckDate',
                    dCheckDate2: 'dCheckDate'
                  }
                }
              },
              {
                field: 'dCheckDate2',
                title: '审核日期',
                type: 'date',
                baseInfoTable: {
                  path: 't_SdOrder',
                  baseInfoData: { dCheckDate2: 'dCheckDate' }
                }
              }
            ]
          }
        ],
        [
          {
            title: '销售类型',
            field: 'cSTCode',
            type: 'select',
            dataKey: 'cSTCode'
          },
          {
            title: '业务类型',
            field: 'cBusType',
            type: 'select',
            dataKey: 'cBusType'
          },
          {
            scope: true,
            title: '物料编号',
            field: 'cInvCode',
            type: 'BaseInfo',
            options: [
              {
                field: 'cInvCode1',
                title: '物料编号',
                type: 'BaseInfo',
                baseInfoTable: {
                  path: 't_Item',
                  baseInfoData: {
                    cInvCode1: 'cInvCode',
                    cInvCode2: 'cInvCode'
                  }
                }
              },
              {
                field: 'cInvCode2',
                title: '物料编号',
                type: 'BaseInfo',
                baseInfoTable: {
                  path: 't_Item',
                  baseInfoData: { cInvCode2: 'cInvCode' }
                }
              }
            ]
          },
          {
            title: '物料类别',
            field: 'cItemClsNo',
            type: 'BaseInfo',
            baseInfoTable: {
              path: 't_ItemCls',
              baseInfoData: {
                cItemClsNo: 'cItemClsNo'
              }
            }
          }
        ],
        [
          { title: '物料名称', field: 'cInvName', type: 'text' },
          {
            title: '订单类型',
            field: 'cSdOrderType',
            type: 'select',
            dataKey: 'cSdOrderType'
          },
          {
            title: '订单紧急度',
            field: 'cPriorityType',
            type: 'select',
            dataKey: 'cPriorityType'
          },
          {
            title: '业务员',
            field: 'cPersonCode',
            type: 'BaseInfo',
            baseInfoTable: {
              path: 't_SdOrder',
              baseInfoData: {
                cPersonCode: 'cPersonCode'
              }
            }
          }
        ],
        [
          {
            title: '销售部门',
            field: 'cDeptNo',
            type: 'BaseInfo',
            baseInfoTable: {
              path: 't_SdOrder',
              baseInfoData: {
                cDeptNo: 'cDeptNo'
              }
            }
          },
          {
            title: '状态',
            field: 'cStatus',
            type: 'select',
            dataKey: 'status'
          },
          {
            title: '制单人',
            field: 'cOperator',
            type: 'text'
          },
          //未找到字段
          {
            title: '未发货',
            field: 'cOperator',
            type: 'checkbox'
          }
        ]
      ],
      columns: [
        {
          field: 'iInterID',
          title: '内码ID',
          type: 'int',
          width: 120,
          hidden: true,
          readonly: true,
          required: true,
          align: 'left'
        },
        {
          field: 'cSdOrderNo',
          title: '销售订单号',
          type: 'string',
          width: 150,
          align: 'left',
          sortable: true
        },
        {
          field: 'cCustOrderNo',
          title: '客户订单号',
          type: 'string',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cSTCode',
          title: '销售类型',
          type: 'string',
          bind: { key: 'cSTCode', data: [] },
          width: 120,
          align: 'left'
        },
        {
          field: 'cBusType',
          title: '业务类型',
          type: 'string',
          bind: { key: 'cBusType', data: [] },
          width: 120,
          align: 'left'
        },
        {
          field: 'cCustNo',
          title: '客户编号',
          type: 'string',
          width: 120,
          required: true,
          align: 'left'
        },
        {
          field: 'cCustName',
          title: '客户名称',
          type: 'string',
          width: 220,
          align: 'left'
        },
        {
          field: 'cPriorityType',
          title: '订单紧急度',
          type: 'string',
          width: 120,
          align: 'left',
          bind: { key: 'cPriorityType', data: [] }
        },
        {
          field: 'cPayCode',
          title: '付款方式',
          type: 'string',
          width: 120,
          align: 'left'
        },
        {
          field: 'cExch_name',
          title: '币种',
          type: 'string',
          bind: { key: 'cCurrency', data: [] },
          width: 120,
          align: 'left'
        },
        {
          field: 'iExchRate',
          title: '汇率',
          type: 'decimal',
          width: 120,
          align: 'right'
        },
        {
          field: 'iTaxRate',
          title: '税率%',
          type: 'float',
          width: 120,
          align: 'right'
        },
        {
          field: 'dDate',
          title: '业务日期',
          type: 'date',
          width: 120,
          align: 'center',
          sortable: true
        },
        {
          field: 'cDeptNo',
          title: '销售部门',
          type: 'string',
          width: 120,
          align: 'left',
          bind: { key: 'Dept', data: [] }
        },
        {
          field: 'cPersonCode',
          title: '业务员',
          type: 'string',
          width: 120,
          align: 'left',
          bind: { key: 't_Person', data: [] }
        },
        {
          field: 'cSCCode',
          title: '发货方式',
          type: 'string',
          width: 120,
          align: 'left',
          bind: { key: 'cSCCode', data: [] }
        },
        {
          field: 'cAddCode',
          title: 'caddcode',
          type: 'string',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cAddress',
          title: '发货地址',
          type: 'string',
          width: 180,
          align: 'left'
        },
        {
          field: 'cCusPerson',
          title: '客户联系人',
          type: 'string',
          width: 180,
          align: 'left',
          bind: { key: 't_Person', data: [] }
        },
        {
          field: 'iDJMoney',
          title: '定金',
          type: 'float',
          width: 120,
          align: 'left'
        },
        {
          field: 'cOperator',
          title: '制单人',
          type: 'string',
          width: 120,
          align: 'left'
        },
        {
          field: 'dOpeDate',
          title: '制单日期',
          type: 'date',
          width: 120,
          align: 'left',
          sortable: true
        },
        {
          field: 'cChecker',
          title: '审核人',
          type: 'string',
          width: 120,
          align: 'left'
        },
        {
          field: 'dCheckDate',
          title: '审核日期',
          type: 'date',
          width: 120,
          align: 'left',
          sortable: true
        },
        {
          field: 'cStatus',
          title: '状态',
          type: 'string',
          bind: { key: 'status', data: [] },
          width: 120,
          align: 'left'
        },
        {
          field: 'iAuditTypeID',
          title: '审核流程',
          type: 'int',
          width: 120,
          align: 'left'
        },
        {
          field: 'cMpsed',
          title: '已参与MPS运算',
          type: 'string',
          width: 120,
          align: 'left'
        },
        {
          field: 'cNote',
          title: '备注',
          type: 'string',
          width: 220,
          align: 'left'
        },
        {
          field: 'cDefine1',
          title: '自定义项1',
          type: 'string',
          width: 180,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine2',
          title: '自定义项2',
          type: 'string',
          width: 180,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine3',
          title: '自定义项3',
          type: 'string',
          width: 180,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine4',
          title: '自定义项4',
          type: 'string',
          width: 180,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine5',
          title: '自定义项5',
          type: 'string',
          width: 180,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine6',
          title: '自定义项6',
          type: 'string',
          width: 220,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine7',
          title: '自定义项7',
          type: 'string',
          width: 220,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine8',
          title: '自定义项8',
          type: 'string',
          width: 220,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine9',
          title: '自定义项9',
          type: 'string',
          width: 220,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine10',
          title: '发货仓库',
          type: 'string',
          width: 220,
          align: 'left'
        },
        {
          field: 'cDefine11',
          title: '自定义项11',
          type: 'float',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine12',
          title: '自定义项12',
          type: 'float',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine13',
          title: '自定义项13',
          type: 'float',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine14',
          title: '自定义项14',
          type: 'float',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cDefine15',
          title: '自定义项15',
          type: 'date',
          width: 120,
          align: 'left',
          sortable: true
        },
        {
          field: 'cDefine16',
          title: '自定义项16',
          type: 'date',
          width: 120,
          align: 'left',
          sortable: true
        },
        {
          field: 'cColor',
          title: '颜色',
          type: 'string',
          width: 120,
          align: 'left'
        },
        {
          field: 'iVTID',
          title: '模版ID',
          type: 'int',
          width: 120,
          align: 'left'
        },
        {
          field: 'cGatheringplan',
          title: '收付款协议',
          type: 'string',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cCloser',
          title: '关闭人',
          type: 'string',
          width: 120,
          align: 'left'
        },
        {
          field: 'dCloseDate',
          title: '关闭日期',
          type: 'date',
          width: 120,
          align: 'left',
          sortable: true
        },
        {
          field: 'iPrintCount',
          title: '打印次数',
          type: 'int',
          width: 120,
          align: 'left'
        },
        {
          field: 'cSaleType',
          title: 'cSaleType',
          type: 'string',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cFxNo',
          title: '分析编号',
          type: 'string',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'cModifier',
          title: '修改人',
          type: 'string',
          width: 120,
          align: 'left'
        },
        {
          field: 'dModifyDate',
          title: '修改时间',
          type: 'date',
          width: 120,
          align: 'left',
          sortable: true
        },
        {
          field: 'cCusPhoneNum',
          title: '联系电话',
          type: 'string',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'iDiscountAmount',
          title: 'iDiscountAmount',
          type: 'decimal',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'iAfterDisAmount',
          title: 'iAfterDisAmount',
          type: 'decimal',
          width: 120,
          align: 'left',
          hidden: true
        },
        {
          field: 'iRcvAmount',
          title: '客户余额',
          type: 'decimal',
          width: 120,
          align: 'left'
        },
        {
          field: 'cSdOrderType',
          title: '订单类型',
          type: 'string',
          width: 120,
          align: 'left',
          bind: { key: 'cSdOrderType', data: [] }
        },
        {
          field: 'cProjectNo',
          title: '项目号',
          type: 'string',
          width: 180,
          align: 'left'
          //
        },
        {
          field: 'iNstructionsCode',
          title: 'iNstructionsCode',
          type: 'string',
          width: 220,
          align: 'left',
          hidden: true
        },
        {
          field: 'iOriAmount',
          title: 'iOriAmount',
          type: 'decimal',
          width: 120,
          align: 'left',
          hidden: true
        }
      ]
    };
  },
  created(){
    //实例获取当前账号的权限路由
		this.$store.dispatch('getTreeMenu');
  }
  // mounted() {
  //   setTimeout(() => {      
  //     this.$refs.grid.saveData();
  //   }, 1000);
  // },
};
</script>
