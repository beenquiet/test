<template>
  <!--左侧菜单组件-->
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo"
    @select="menuSelected"
    background-color="#F0F6F6"
    text-color="#3C3F41"
    active-text-color="black"
  >
    <nav-menu :navMenus="leftMenus"></nav-menu>
  </el-menu>
</template>
 
<script>
import NavMenu from "./NavMenu.vue";
import { data1 } from "./data.js";
export default {
  data() {
    return {
      leftMenus: data1.list
    };
  },
  components: {
    NavMenu
  },
  created() {
    console.log("数据信息", this.leftMenus);
  },
  methods: {
    menuSelected(index, indexPath) {
      console.log("当前绑定的index值", index);
      console.log("当前绑定的index与path值", indexPath);
    }
  }
};
</script>