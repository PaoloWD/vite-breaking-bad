<template>
  <div class="bg-black text-white p-3">
    Trovati {{ store.info.count }} personaggi
  </div>
</template>
<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>
<style lang="scss"></style>
