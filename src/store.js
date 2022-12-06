import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  characterList: [],
});

export function fetchCharacters() {
  axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
    store.characterList = resp.data.results;
  });
}
