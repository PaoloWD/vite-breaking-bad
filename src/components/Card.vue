<template>
  <div class="card">
    <img :src="singleCharacter.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ singleCharacter.name }}</h5>
      <p class="card-text">
        {{ singleCharacter.species }}
      </p>
      <p class="card-text">
        {{ singleCharacter.status }}
      </p>
      <a href="#" class="btn btn-primary">Details</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    singleCharacter: {
      type: Object,
    },
  },

  data() {
    return {};
  },
};
</script>
<style lang=""></style>
