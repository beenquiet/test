<template>
  <div class="showscreen">
    <!-- 头部 -->
    <div class="head">
      <img src="../../assets/show/header.png" class="bg" />
      <img src="../../assets/show/LOGO.png" alt="" class="logo" />
      <h2>耐特恩智建现场管理数据平台</h2>
    </div>
    <!-- 主要内容 -->
    <div class="main">
      <!-- 左 -->
      <div class="left">
        <!-- 左上 -->
        <div class="left-top cloumn">
          <!-- 标题组件 -->
          <Title :title="title">
            <div slot="right">班级总数：{{ classTotal }}</div>
          </Title>
          <Progress/>
        </div>
        <!-- 左下 -->
        <div class="left-bottom cloumn">
          <!-- 标题组件 -->
          <Title :title="title"> </Title>
          <Txt />
        </div>
      </div>
      <!-- 中 -->
      <div class="center">
        <div class="center-top">
          <div class="center-top-head">
           <ShowTime/>
          </div>
          <div class="center-top-bottom">
            <Center />
          </div>
        </div>
        <div class="center-bottom cloumn">
          <!-- 标题组件 -->
          <Title :title="title"> </Title>
          <ShowData/>
        </div>
      </div>
      <!-- 右 -->
      <div class="right">
        <div class="right-top cloumn">
          <!-- 标题组件 -->
          <Title :title="title"/>
          <Txt />
          哈哈
        </div>
        <div class="right-bottom cloumn">
          <!-- 标题组件 -->
          <Title :title="title"> </Title>
         <Right/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "./childcmp/Title.vue";
import Txt from "./childcmp/Txt.vue";
import ShowData from './childcmp/ShowData'

import Right from "./childcmp/rightshow/Right.vue";
import Center from "./childcmp/centershow/Center.vue";
import ShowTime from "./childcmp/fomattime/ShowTime"
import Progress from "./childcmp/progress/Progress"
export default {
  data() {
    return {
      title: "班组",
      classTotal: "22",
     
    };
  },
  components: {
    Title,
    Txt,
    Right,
    ShowData,
    Center,
    ShowTime,
    Progress
  },
 
};
</script>
<style scoped>
.showscreen {
  width: 100%;
  height: 100%;
  background: #000b1f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 头部 */
.head {
  position: relative;
}
.head .logo {
  position: absolute;
  left: 330px;
}
.head .bg {
  width: 100%;
}
.head h2 {
  color: #63d8e2;
  position: absolute;
  left: 400px;
  top:-8px;
  font-size: 18px;
}
/* 内容 */
.main {
  height: calc(100% - 85px);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
}
/* 内容左 */
.main .left {
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main .left .left-top {
  height: 62%;
  border: 1px solid #47aac9;
}
.main .left .left-bottom {
  height: 36%;
  border: 1px solid #47aac9;
}
/* 内容中 */
.main .center {
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main .center .center-top {
  height: 62%;
}
.main .center .center-top .center-top-head {
  height: 60%;
  border: 1px solid #47aac9;
}
.main .center .center-top .center-top-bottom{
  height: 44%;

}
.main .center .center-bottom {
  height: 36%;
  border: 1px solid #47aac9;
}
/* 内容右 */
.main .right {
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main .right .right-top {
  height: 36%;
  border: 1px solid #47aac9;
}
.main .right .right-bottom {
  height: 62%;
  border: 1px solid #47aac9;
   
}
.cloumn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


</style>