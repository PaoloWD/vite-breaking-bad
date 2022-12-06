<template>
  <div class="card">
    <img
      :src="singleCharacter.image"
      class="card-img-top p-3 card-body"
      alt="..."
    />
    <div class="card-body text-white">
      <h5 class="card-title">{{ singleCharacter.name }}</h5>
      <p class="card-text text-secondary">
        {{ singleCharacter.species }}
      </p>
      <p class="card-text text-secondary">
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
<style scoped lang="scss">
.card-body {
  background-color: #2e3a46;
}
</style>
