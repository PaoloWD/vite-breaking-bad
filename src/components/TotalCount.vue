<template>Trovati {{ store.info.count }} personaggi</template>
<script>
import { store } from "../store";
export default {
  name: "TotalCount",
  data() {
    return {
      store,
    };
  },
};
</script>
<style lang=""></style>
