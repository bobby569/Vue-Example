<template>
  <div class="col-md-4" @click="switchCharacter">
    <div class="character-card">
      <div class="card-block">
        <h4 class="card-title">{{ character.name }}</h4>
        <p class="card-text">Height: {{ character.height }}cm</p>
        <p class="card-text">Mass: {{ character.mass }}kg</p>
        <p class="card-text">Hair Color: {{ character.hair_color }}</p>
        <p class="card-text">Eye Color: {{ character.eye_color }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data: () => ({
    character: {}
  }),
  methods: {
    fetchCharacter(id) {
      axios
        .get(`https://swapi.co/api/people/${id}`)
        .then(res => (this.character = res.data));
    },
    switchCharacter() {
      let rand_id = Math.floor(Math.random() * 83) + 1;
      this.fetchCharacter(rand_id);
    }
  },
  created() {
    this.fetchCharacter(this.id);
  }
};
</script>

<style scoped>
.character-card {
  border: 2px solid #4FC08D;
  border-radius: 4px;
  cursor: pointer;
}
</style>
