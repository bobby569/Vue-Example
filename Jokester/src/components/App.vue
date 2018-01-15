<template>
  <div id="app" class="container">
    <h3>Jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">Add jokes</button>
    <button class="btn btn-primary" @click="addJokes">Add a joke</button>
    <div>
      <span v-for="type in types">
        <input type="checkbox" :value="type" v-model="checkedTypes" checked>
        <label>{{ type }}</label>&nbsp;
      </span>
    </div>
    <div class="row">
      <Joke
        v-for="(joke, idx) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :key="idx"
        :index="idx"
        :joke="joke"
       />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from './Joke.vue';

export default {
  data() {
    return {
      types: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming']
    };
  },
  methods: mapActions(['initJokes', 'addJokes']),
  components: {
    Joke
  }
};
</script>

<style>
#app {
  color: #2C3350;
  margin-top: 40px;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
