<template>
  <el-pagination
    :current-page="PageIndex"
    :page-sizes="page.pagesizes"
    :page-size="page.PageSize"
    layout="total,  prev, pager, next, jumper,sizes"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  ></el-pagination>
</template>

<script>
export default {
  name: 'comPage',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    PageIndex: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      page: {
        pagesizes: [10, 20, 30, 40, 50, 100],
        PageSize: 10,
      },
    }
  },
  computed: {},
  methods: {
    handleSizeChange(e) {
      this.page.PageSize = e
      this.$emit('getData', this.PageIndex, this.page.PageSize)
    },
    handleCurrentChange(e) {
      this.$emit('getData', e, this.page.PageSize)
    },
  },
}
</script>

<style scoped>
</style>