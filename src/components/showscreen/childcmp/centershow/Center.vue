<template>
  <div class="center-child">
    <CenterItem :every="every"  :sign='true'/>
    <CenterItem :every="every1" :sign='false'/>
  </div>
</template>
<script>
import CenterItem from "./CenterItem";
export default {
  data() {
    return {
      every: {
        name: "江湖",
        duty: "武林盟主",
        idcard: "513902199305225156",
        tel: "12541258745",
        work: "钢筋工",
        time: "201902270",
        status: "正常",
        data: "37.8"
      },
      every1: {
        name: "江湖",
        duty: "武林盟主",
        idcard: "513902199305225156",
        tel: "12541258745",
        work: "钢筋工",
        time: "201902270",
        status: "过高",
        data: "37.8"
      },
    };
  },
  components: {
    CenterItem
  }
};
</script>
<style scoped>
.center-child {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center !important;
}
</style>