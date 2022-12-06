<template>
  <div class="container">
    <div class="row">
      <div
        class="col col-lg-3 col-md-4 col-sm-6 col-xs-12"
        v-for="(singleCard, index) in store.characterList"
        :key="index"
      >
        <Card :singleCharacter="singleCard"></Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import { store, fetchCharacters } from "../store";
export default {
  name: "MainContainer",
  components: { Card },
  data() {
    return {
      store,
    };
  },
  created() {
    fetchCharacters();
  },
};
</script>
<style lang="scss"></style>
