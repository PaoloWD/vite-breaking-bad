<template>
  <div class="jumbotron"></div>
</template>
<script>
export default {
  name: "Loader",
  props: ["label"],
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.jumbotron {
  background-image: url(../../public/rocco.jpeg);
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 9;
}
</style>
