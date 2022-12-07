import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  characterList: [],
  info: {},
  loading: false,
  activeFilters: null,
});

export function fetchCharacters() {
  store.loading = true;
  axios
    .get("https://rickandmortyapi.com/api/character", {
      params: {
        ...store.activeFilters,
      },
    })
    .then((resp) => {
      store.characterList = resp.data.results;
      store.info = resp.data.info;
      setTimeout(() => {
        store.loading = false;
      }, 1000);
    });
}
