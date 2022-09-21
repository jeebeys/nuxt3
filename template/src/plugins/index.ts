import store from "@/store";
// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
