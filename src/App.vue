<script>
import { store } from "../src/store";
import HeaderNav from "../src/components/HeaderNav.vue";
import MainContainer from "./components/MainContainer.vue";
import FilterComp from "./components/FilterComp.vue";
import Loader from "./components/Loader.vue";

export default {
  components: { HeaderNav, MainContainer, FilterComp, Loader },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <Loader v-if="store.loading"></Loader>
  <div class="bg-body-1">
    <HeaderNav></HeaderNav>
    <div class="container bg-white p-5">
      <FilterComp></FilterComp>
      <MainContainer></MainContainer>
    </div>
  </div>
</template>

<style>
.bg-body-1 {
  background-color: #2e3a46;
}
</style>
