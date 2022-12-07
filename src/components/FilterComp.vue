<template>
  <div class="text-center fw-bold mb-3">
    Trovati {{ store.info.count }} personaggi
  </div>
  <div
    class="bg-black text-white d-flex justify-content-between gap-5 p-3 mb-5"
  >
    <div>
      numero stati: {{ statusList.length }}
      <div v-for="status in statusList">
        {{ status }}
      </div>
    </div>
    <div>
      Numero generi: {{ genderList.length }}
      <div v-for="gender in genderList">{{ gender }}</div>
    </div>
    <div>
      Numero specie: {{ speciesList.length }}
      <div v-for="specie in speciesList">{{ specie }}</div>
    </div>
  </div>
  <form action="" @submit.prevent="searchClick">
    <div class="row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Names"
          name="name"
          v-model="filters.name"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Status"
          name="status"
          v-model="filters.status"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Species"
          name="species"
          v-model="filters.species"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Types"
          name="type"
          v-model="filters.type"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Genders"
          name="gender"
          v-model="filters.gender"
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary my-3">Search</button>
    </div>
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

    speciesList() {
      const species = [];
      this.store.characterList.forEach((char) => {
        if (!species.includes(char.species)) {
          species.push(char.species);
        }
      });
      return species;
    },
  },
};
</script>
<style lang="scss"></style>
