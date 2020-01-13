<template>
    <div>
    <Child >
         <template v-slot:first2='username' @changeN='changem'>
           {{username.username}}
        </template>
        <p>呵呵哒，呵呵哒，江湖不在见</p>

    </Child>
    </div>
</template>

<script>
import Child from "./Child";
import axios from 'axios';
import Cookies from 'js-cookie'
export default {
  data() {
    return {};
  },
  components: {
    Child
  },
  mounted(){
      axios.get('/api/test').then(data=>{
        console.log(data)
      })
      Cookies.remove('sidebarStatus')
  },
  methods:{
      changem(v){
          console.log(22)
          console.log(v)
      }
  }
};
</script>
<style lang="less">
</style>