import {formatTime} from '@/utils/util'
export default {
  name: "tableManage",
  data() {
    return {
      tableData:[],
      page:{
        PageIndex:1,
        PageSize:10,
        total:0
      },
      searchText:'',
      form:{
        Title:'',
        Content:''
      },
      rules: {
        Name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        Title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
        ],
        Content: [
          { required: true, message: '请输入内容', trigger: 'blur' },
        ],
      },
      dialogVisible:false,
      disabled:false,
    };
  },
  components: {},
  computed: {

  },
  created() {},
  methods: {
    viewDetail(scope){
      this.form=scope
      this.dialogVisible=true
      this.disabled=true
    },
    seachListFun(){
      this.tableData= this.tableData.filter((item)=>{
          if(item.Name.indexOf(this.searchText) != -1){
            return item;
          }
      })
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addNews(){
      this.dialogVisible=true
      this.disabled=false
    },
    // 新增数据
    submitData(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params={
            Name:this.form.Name,
            Title:this.form.Title,
            Content:this.form.Content,
            createdTime:formatTime(new Date())
          }
          this.tableData.unshift(params)
          this.dialogVisible=false

        } else {
          console.log('error submit!!');
          return false;
        }
      });
     
    },
    reSet(){
      this.searchText=''
      this.getNewsList()
    },
    // 获取列表数据
    getNewsList(PageIndex, PageSize) {
      if (PageIndex) {
        this.page.PageIndex = PageIndex
      }
      if(PageSize){
        this.page.PageSize = PageSize
      }
      let params={
        PageIndex:this.page.PageIndex,
        PageSize: this.page.PageSize 
      }
      this.$api.news.getNewsList(params)
        .then((res) => {
          this.tableData=res.data.data
          this.page.total=res.data?res.data.data.length:0
        })
        .catch((res) => {})
    },
  },
  mounted() {
    this.getNewsList()
  },
};
