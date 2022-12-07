<template>
  <div>Trovati {{ store.info.count }} personaggi</div>
  <div class="bg-black text-white d-flex gap-3 p-3">
    <div>
      Ci sono {{ statusList.length }} stati e sono:
      <div v-for="status in statusList">
        {{ status }}
      </div>
    </div>
    <div>
      <div>
        Ci sono {{ genderList.length }} stati e sono:
        <div v-for="gender in genderList">{{ gender }}</div>
      </div>
    </div>
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
    <button type="submit" class="btn btn-primary">Cerca</button>
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
  computed: {
    statusList() {
      const status = [];
      this.store.characterList.forEach((char) => {
        if (!status.includes(char.status)) {
          status.push(char.status);
        }
      });
      return status;
    },

    genderList() {
      const gender = [];
      this.store.characterList.forEach((char) => {
        if (!gender.includes(char.gender)) {
          gender.push(char.gender);
        }
      });
      return gender;
    },
  },
};
</script>
<style lang="scss"></style>
