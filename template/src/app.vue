<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts">
import { Options as Component, Vue } from "vue-class-component";
@Component({})
export default class App extends Vue {
  mounted() {
    console.log("App....");
  }
}
</script>
