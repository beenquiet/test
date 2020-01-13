<template>
    <div  >
        哇哈哈哈
        <slot name='first2' :username='username' @click='change'></slot>
    <!-- <slot name='fisrt1'></slot> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: "江湖"
    };
  },
  mounted() {
  },
  methods:{
      change(){
          this.$emit('changeN',this.username)
      }
  }
};
</script>
<style lang="less">
</style>