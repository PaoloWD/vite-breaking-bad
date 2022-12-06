<script>
import { store } from "../src/store";
import HeaderNav from "../src/components/HeaderNav.vue";
import MainContainer from "./components/MainContainer.vue";
export default {
  components: { HeaderNav, MainContainer },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <HeaderNav></HeaderNav>
  <div class="container">
    <MainContainer></MainContainer>
  </div>
</template>

<style scoped></style>
