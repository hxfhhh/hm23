<template>
  <el-card v-loading='loading'>
      <bread-crumb slot="header">
          <template slot="title">素材管理</template>
      </bread-crumb>
      <el-upload :show-file-list="false" action='' class="pic" :http-request='uploadImg'>
        <el-button   type="primary" >上传图片</el-button>
      </el-upload>
      <el-tabs v-model="activeName" @tab-click='changeTab'>
    <el-tab-pane label="全部素材" name="first">
        <div class="img-list">
<el-card class="img-item" v-for="item in list" :key='item.id'>
            <img :src="item.url" alt="" >
            <div class="operate">
                <i :style='{color:item.is_collected ? "red":"#000"}' class="el-icon-star-on" @click='collectOrCancel (item)'></i>
                <i class="el-icon-delete" @click="delImg(item.id)"></i>
            </div>
        </el-card>
        </div>
<el-row type='flex' justify="center">
<el-pagination
@current-change='changePage'
  background
  layout="prev, pager, next"
  :total="page.total"
  :current-page="page.currentPage"
  :page-size="page.pageSize">
</el-pagination>
</el-row>

    </el-tab-pane>
    <el-tab-pane label="收藏素材" name="second">
        <div class="img-list">
<el-card class="img-item" v-for="item in list" :key='item.id'>
            <img :src="item.url" alt="" >
        </el-card>
        <el-row type='flex' justify="center">
<el-pagination
@current-change='changePage'
  background
  layout="prev, pager, next"
  :total="page.total"
  :current-page="page.currentPage"
  :page-size="page.pageSize">
</el-pagination>
</el-row>
        </div>
    </el-tab-pane>
  </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      list: [],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 8
      },
      loading: false
    }
  },
  methods: {
    // 收藏与范收藏
    collectOrCancel (item) {
      let mess = item.is_collected ? '取消' : ''
      this.$confirm(`确定要进行${mess}收藏操作吗？`).then(() => {
        this.$axios({
          url: `/user/images/${item.id}`,
          method: 'put',
          data: { collect: !item.is_collected }
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    delImg (id) {
      this.$confirm('确定要删除图片吗').then(() => {
        this.$axios({
          url: `/user/images/${id}`,
          method: 'delete'
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    uploadImg (params) {
      const data = new FormData()
      data.append('image', params.file)
      this.$axios({
        url: 'user/images',
        method: 'post',
        data
      }).then(() => {
        this.getMaterial()
      })
    },
    changeTab () {
      this.page.currentPage = 1
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    getMaterial () {
      this.loading = true
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'second', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
        this.loading = false
      })
    }
    // handleClick () {
    //   if (this.activeName === 'first') {
    //     this.getMaterial(false)
    //   }
    //   if (this.activeName === 'second') {
    //     this.getMaterial(true)
    //   }
    // }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped>
.pic{
  position: absolute;
right: 20px;
margin-top: -10px;
}
.img-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .img-item{
        width: 180px;
        height: 180px;
        border-radius: 6px;
        margin: 30px;
        position: relative;
        img{
            width:100%;
            height:100%;
        }
        .operate{
            background-color: #f4f5f6;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: space-around;
            align-items:center;
            i{
                font-size: 20px;
            }
        }
    }
}
</style>
