<template>
  <h1>HelloIndex1: {{ msg1 }}</h1>
  <h1>HelloIndex2: {{ msg2 }}</h1>
  <button @click="etClick">click - {{ $store.state.about.value }} - {{ $store.state.label }}</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Watch, Emit, Ref } from "vue-property-decorator";

@Options({
  props: {
    msg1: String
  }
})
export default class HelloIndex extends Vue {
  @Prop({ default: "test" }) msg2: string | undefined;

  onClick() {
    console.log("onClick");
  }

  @Emit("say")
  etClick() {
    console.log("etClick");
    this.$store.dispatch("doTest");
    this.$store.dispatch("doArgs", { abc: "test" });
    this.$store.dispatch("about/delayedDecrease");
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
