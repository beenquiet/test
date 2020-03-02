<template>
  <div class="progress">
    <ProgressItem :percentage="item.percentage" :text="item.text" v-for="(item,index) in item" :key="index"/>
    
  </div>
</template>
<script>
import ProgressItem from "./ProgressItem";
export default {
  data() {
    return {
      item:[
          {percentage:30,text:"水泥工班组"},
          {percentage:60,text:"电工班组"},
          {percentage:23,text:"电工班组"},
          {percentage:20,text:"电工班组"},
          {percentage:69,text:"电工班组"},
      ]
    };
  },
  components: {
    ProgressItem
  }
};
</script>
<style scoped>
.progress{
    height:90%;
}
</style>