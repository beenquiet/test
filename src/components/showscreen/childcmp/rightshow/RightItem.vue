<template>
  <div class="right-item">
    <img src="../../../../assets/show/person.png" alt="" />
    <div>
      <p>姓名：{{ message.name }}</p>
      <p>职务：{{ message.duty }}</p>
      <p>身份证号：{{ message.idcard }}</p>
      <p>联系电话：{{ message.tel }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    message: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style scoped>
p{
  margin: 0;
  padding: 0;
}
.right-item {
  height: 100%;
  color: #00d9fb;
  text-align: left;
  display: flex;
  padding: 0 20px;
  align-items: center;
  font-size: 10px;
}
.right-item img {
  width: 54px;
  height: 60px;
  margin-right: 20px;
}
</style>