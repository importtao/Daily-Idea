<template>
  <el-table :data="tableData" v-bind="$attrs" v-on="tableListeners">
    <el-table-column v-if="showRadioIndex" width="65">
      <template slot-scope="scope">
        <el-radio
          :value="currentRow"
          :label="(scope.row)"
          @input="handleChange($event)"
        >{{ scope.$index +1 }}</el-radio>
      </template>
    </el-table-column>
    <slot v-for="item in tableHead" :name="item.field" :tableHeadItem="item">
      <el-table-column
        :label="item.label"
        :width="widthOption[item.field]?widthOption[item.field]:''"
        :prop="item.field"
      >
        <template slot-scope="scope">
          <div v-if="scope.row[item.field]">{{ scope.row[item.field] }}</div>
          <div v-else>-</div>
        </template>
      </el-table-column>
    </slot>
    <el-table-column v-if="showOperation" label="操作" :width="widthOption['operate_width']?widthOption['operate_width']:''">
      <template slot-scope="scope">
        <slot name="operate-current-row" :row="scope.row" />
      </template>

    </el-table-column>
  </el-table>
</template>
<script>
export default {
  inheritAttrs: false,
  model: {
    event: 'change',
    prop: 'currentRow'
  },
  props: {
    showOperation: {
      type: Boolean,
      default() {
        return true
      }
    },
    showRadioIndex: {
      type: Boolean,
      default() {
        return true
      }
    },
    currentRow: {
      type: Object,
      default() {
        return {}
      }
    },
    widthOption: {
      type: Object,
      // required: true,
      default() {
        return {}
      }
    },
    tableHead: {
      type: Array,
      default() {
        return [] // 避免传入的data不存在导致的报错
      }
    },
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    // table传递的所有函数
    tableListeners() {
      var obj = {}
      delete (this.$listeners.change)
      Object.assign(
        obj,
        this.$listeners,
        { 'current-change': this.handleCurrentChange },
      )
      return obj
    }
  },
  created() {},
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    },
    handleCurrentChange(currentRow, oldRow) {
      this.$emit('current-change', currentRow, oldRow)
      this.handleChange(currentRow)
    }
  }
}
</script>

