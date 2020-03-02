<template>
  <div class="right-child">
    <RightItem :message="message" />
    <RightItem :message="message" />
    <RightItem :message="message" />
  </div>
</template>
<script>
import RightItem from "./RightItem.vue";
export default {
  data() {
    return {
      message: {
        name: "江湖",
        duty: "武林盟主",
        idcard: "513902199305225156",
        tel: "12541258745"
      }
    };
  },
  components: {
    RightItem
  }
};
</script>
<style>
.right-child{
  height: 90%;
  display: flex;
  flex-direction: column;
  
  justify-content: space-around;
}
</style>