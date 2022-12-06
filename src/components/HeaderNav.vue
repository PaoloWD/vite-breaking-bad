<template>
  <div>Breaking Bad Api</div>
  <div class="container py-5">
    <select class="form-select" aria-label="Default select example">
      <option selected>Select category</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
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
<style lang="scss">
.form-select {
  width: 200px;
}
</style>
