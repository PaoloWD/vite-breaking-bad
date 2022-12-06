import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  characterList: [],
  info: {},
  loading: false,
});

export function fetchCharacters() {
  store.loading = true;
  axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
    store.characterList = resp.data.results;
    store.info = resp.data.info;
    setTimeout(() => {
      store.loading = false;
    }, 3000);
  });
}
