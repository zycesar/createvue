export default {
  data() {
    return {
      data: [],
      page: 1,
      size: 10,
      query: {},
      params: {},
      loading: false,
      pages: {
        total: 0,
        current: 1
      }
    }
  },
  methods: {
    handleSizeChange(e) {

    },
    handleCurrentChange(e) {

    },
    search() {
      this.getdata()
    },
    getList(url, data) {},
  }
}
