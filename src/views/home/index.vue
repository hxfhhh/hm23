/* eslint-disable no-undef */
<template>
<!-- 大容器 -->
    <el-container>
<!-- 左侧导航 -->
<el-aside style="width:200px;overflow:hidden;background-color:#323745">
    <layout-aside></layout-aside>
  </el-aside>
<!-- 右侧大容器 -->
    <el-container>
      <!-- 顶部导航 -->
      <el-header>
        <!-- 头部组件 -->
        <layout-header></layout-header>
      </el-header>
      <!-- 二级路由 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeaderVue from '../../components/home/layout-header.vue'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeaderVue
  }
}
</script>

<style>

</style>
