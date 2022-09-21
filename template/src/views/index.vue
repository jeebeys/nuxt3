<template>
  <div>
    <img src="@/assets/vue.svg" />
    <img src="/vite.svg" />
    <div>index <router-link to="/about">About</router-link></div>
    <HelloIndex msg1="V1" msg2="V2" @say="etSay"/>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
export default class Index extends Vue {
  etSay(){
    console.log("cb in Index....");
  }
  mounted() {
    console.log("Index....");
  }
}
</script>
<style scoped>
@import "@/assets/style.css";

HTML {
  height: 100%;
  _overflow-x: hidden;
  -webkit-text-size-adjust: none;
}
BODY {
  margin: 0px;
  font-family: "Microsoft YaHei", tahoma, arial, simsun;
  height: 100%;
}
P {
  margin-top: 0px;
  margin-bottom: 0px;
}
H1 {
  margin-top: 0px;
  margin-bottom: 0px;
}
H2 {
  margin-top: 0px;
  margin-bottom: 0px;
}
H3 {
  margin-top: 0px;
  margin-bottom: 0px;
}
H4 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.main {
  min-height: 400px;
  margin: 0px auto;
  width: 850px;
}
.container {
  padding-top: 180px;
}
H1 {
  font-size: 29px;
}
H2 {
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 22px;
  font-weight: 100;
}
H3 {
  color: #2f2d2e;
  font-size: 26px;
}
H4 {
  text-align: center;
  margin: 10px 20px;
  float: right;
}
.Countdown {
  font-family: tahoma, arial, simsun;
  color: #4a4a4a;
  font-size: 30px;
  padding-top: 30px;
}
.Countdown SPAN {
  text-align: center;
  line-height: 55px;
  width: auto;
  display: inline-block;
  margin-left: 2px;
}
.Countdown .bd {
  background-image: none;
  width: 16px;
}
.content {
  border-bottom: #bbb 1px solid;
  border-left: #bbb 1px solid;
  padding-bottom: 85px;
  margin: auto;
  padding-left: 85px;
  width: 460px;
  padding-right: 85px;
  border-top: #bbb 1px solid;
  border-right: #bbb 1px solid;
  padding-top: 85px;
  border-radius: 20px;
}
.foot {
  margin-top: 200px;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
}
.foot a {
  width: 200px;
  font-size: 12px;
  text-decoration: none;
  margin: 0 auto;
}
</style>
