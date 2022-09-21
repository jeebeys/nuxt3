<template>
  <div>
    <div @click="etClick">about</div>
    <HelloAbout msg1="Nuxt1" msg2="nuxt2" @onSay="etSay"></HelloAbout>
  </div>
</template>

<script lang="ts">
import { Options as Component, Vue } from "vue-class-component";

export default class About extends Vue {

  etSay(){
    console.log("etSay in About....");
  }

  etClick() {
    console.log("etClick....");
  }

  mounted() {
    console.log("About....");
  }
}
</script>

<style scoped></style>
