<template>
  <div class="title">
    <div>
      <img src="../../../assets/show/right.png" alt="" />
      <span>{{ title }}</span>
    </div>
    <slot name='right'></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title:{
      type:String
    }
  }
};
</script>
<style scoped>
.title {
  color: #00f2f1 !important;
  display: flex;
  margin:10px;
  justify-content: space-between;
  align-items: center;
  font-size: 12px
}
.title div{
    display: flex;
    justify-content: center;
}
.title img{
    margin-right: 12px;
    height: 20px;
    vertical-align: middle;
    margin-top: 4px;
    width: 12px;
    height: 8px;
}

</style>