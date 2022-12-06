<template>
  <div class="text-white">Breaking Bad Api</div>
  <div class="container py-5">
    <select class="form-select" aria-label="Default select example">
      <option selected>Select category</option>
      <option value="1">boh</option>
      <option value="2">boh 2</option>
      <option value="3">boh 3</option>
    </select>
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
<style scoped lang="scss">
.form-select {
  width: 200px;
}
</style>
