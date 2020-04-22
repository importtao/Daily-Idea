
<template>
  <div class="container">
    <AutoTable
      v-model="currentSelectedRow"
      v-loading="listLoading"
      style="width: 80%"
      :width-option="widthOption"
      highlight-current-row
      :table-head="customTableHead"
      :table-data="tableData"
      border
      :show-operation="true"
    >
      <template #time="{tableHeadItem}">
        <!-- vue 2.6自定义插槽的写法 -->
        <el-table-column :label="tableHeadItem.label" width="130">
          <template slot-scope="scope">
            {{ scope.row.time }}
            <el-input v-model="scope.row.first" />
          </template>
        </el-table-column>
      </template>
      <template #operate-current-row="{row}">
        <el-button size="mini" type="danger" @click="test(row)">删除</el-button>
        <!-- //operate-current-row为自定义组件的插槽名，比如你可以写按钮，弹框，message都可以 -->
        <!-- show-operation='true'才可以显示 -->
        <!-- 没有对应上的我们默认显示 -   -->
      </template>
    </AutoTable>
  </div>
</template>
<script>
import AutoTable from '@/components/AutoTable'
import { getAutoTable } from '@/api/table'

export default {
  components: { AutoTable },
  data() {
    return {
      listLoading: true,
      currentSelectedRow: {}, // 绑定当前行
      widthOption: {
        type: '200'
      }, // 自定义表格宽度
      customTableHead: [], // 自定义表头
      tableData: []
    }
  },
  created() {
    this.getTableList()
  },
  methods: {
    getTableList() {
      this.listLoading = true
      getAutoTable()
        .then(res => {
          console.log(res, 'res')
          this.tableData = res.data.tableData
          this.customTableHead = res.data.customTableHead
        })
        .catch(err => {
          console.log('err', err)
        })
        .finally(() => {
          this.listLoading = false
        })
    },
    test() {
      this.$message.success('点击成功！')
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
