<template>
  <div class="card">
    <img :src="character.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ character.name }}</h5>
      <p class="card-text">
        {{ character.species }}
      </p>
      <p class="card-text">
        {{ character.status }}
      </p>
      <a href="#" class="btn btn-primary">Details</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    character: {
      type: Object,
    },
  },

  data() {
    return {};
  },
};
</script>
<style lang=""></style>
