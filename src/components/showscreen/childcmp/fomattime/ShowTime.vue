<template>
  <div class="show-time">
      {{filter}}
  </div>
</template>
<script>
import { formatDate,getlunar } from "./index";
export default {
  data() {
    return {
        
    };
  },
  mounted() {},
  computed: {
    filter() {
      let data = new Date();
      let index=data.getDay()
      const weekArr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
      const week=weekArr[index]
     console.log(getlunar());
     
      
      return formatDate(data, "yyyy 年 MM 月 dd 日") + ' ' +week;
    }
  }
};
</script>
<style scoped>
.show-time{
    color: #00B3D3;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
}
</style>