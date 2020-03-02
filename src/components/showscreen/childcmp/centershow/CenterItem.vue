<template>
  <div class="center-item">
    <!-- <img src="../../../../assets/show/bgB.png" alt=""> -->
    <div :class="[!sign?'active':'other','center-item-box']" >
      <img src="../../../../assets/show/person.png" alt="" />
    </div>
    <div>
      <p>姓名：{{ every.name }}</p>
      <p>班组：{{ every.duty }}</p>
      <p>工种：{{ every.work }}</p>
      <p>身份证号：{{ every.idcard }}</p>
      <p>入场时间：{{ every.time }}</p>
      <p>入场状态：{{ every.status }}</p>
      <p>入场体温数据：{{ every.data }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    every: {
      type: Object,
      default: () => {
        return {};
      }
    },
    sign:Boolean
  },
  mounted() {
      
  }
};
</script>
<style scoped>
p{
  margin:0;
}
.center-item {
  width: 50%;
  height: 80%;
  display: flex;
  color: #00d9fb;
  font-size: 10px;
  text-align: left;
  align-items: center;
}
.center-item .center-item-box {
  width: 80px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 8px;
}
.center-item .center-item-box img {
  width: 50px;
  height: 80px;
}
.active {
  background: url('../../../../assets/show/bgR.gif') no-repeat center;
  background-size: 100% 100%;
}
.other{
  background: url('../../../../assets/show/bgB.png') no-repeat center;
  background-size: 100% 120%;
}
</style>