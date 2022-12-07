<template>
  <div class="bg-black text-white p-3">
    Trovati {{ store.info.count }} personaggi
  </div>
  <form action="" @submit.prevent="searchClick">
    <div class="row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Filtro nome"
          name="name"
          v-model="filters.name"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Filtro stato"
          name="status"
          v-model="filters.status"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Filtro specie"
          name="species"
          v-model="filters.species"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Filtro tipo"
          name="type"
          v-model="filters.type"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Filtro genere"
          name="gender"
          v-model="filters.gender"
        />
      </div>
    </div>
    <button class="btn btn-primary">Cerca</button>
  </form>
</template>
<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      filters: {
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
      },
    };
  },
  methods: {
    searchClick() {
      this.$emit("search", { ...this.filters });
    },
  },
};
</script>
<style lang="scss"></style>
