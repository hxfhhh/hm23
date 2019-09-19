<template>
<!-- 大容器 -->
    <el-container>
<!-- 左侧导航 -->
<el-aside>
    <layout-aside></layout-aside>
  </el-aside>
<!-- 右侧大容器 -->
    <el-container>
      <!-- 顶部导航 -->
      <el-header>顶部导航</el-header>
      <!-- 二级路由 -->
      <el-main>容器</el-main>
    </el-container>
    </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>

</style>
