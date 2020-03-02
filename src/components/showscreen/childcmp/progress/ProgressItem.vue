<template>
  <div class="progress-item">
    <div class="progress-item-left">{{text}}</div>
    <div class="progress-item-right">
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="filterNum"
        color="#00A2FF"
        :show-text="false"
        :max="70"
      >
      </el-progress>
      <span class="progress-item-person" >{{ percentage + "人" }}</span>
      <span class="progress-item-total" v-if="percentage<62">70人</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["percentage","text"],
  computed:{
      filterNum(){
          return parseInt((parseInt(this.percentage)/70)*100)
      }
  },
  mounted() {
      
  }
};
</script>
<style>
.progress-item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
}
.progress-item .progress-item-left{
    width: 16%;
    color: #00D9FB;
    font-size: 8px;
    text-align: right
}
.progress-item .progress-item-right{
    width: 74%;
}
.progress-item .progress-item-right {
  position: relative;
}
.el-progress .el-progress-bar__inner,
.el-progress .el-progress-bar__outer {
  border-radius: 0;
}
.el-progress .el-progress-bar__outer {
  background-color: #002069;
}
.progress-item .progress-item-person {
  position: absolute;
  top: 2px;
  left: 10px;
  z-index: 3;
  color: #020e29;
}
.progress-item .progress-item-total {
  position: absolute;
  top: 2px;
  right: 10px;
  z-index: 4;
  color: #00a2ff;
}
</style>