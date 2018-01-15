<template>
  <div id="app" class="container">
    <h3>{{ title }}</h3>
    <!-- <div class="row">
      <Character v-for="(id, idx) in init_id" :id="id" :key="idx" />
    </div> -->
    <h4>
      <router-link class="link" to="/data/people">Meet People</router-link> |
      <router-link class="link" to="/data/planets">Explore Planets</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>

<script>
import Character from './components/Character.vue';

export default {
  name: 'app',
  data: () => ({
    title: 'Starbase Router',
    init_id: [1, 13, 14]
  })
  // components: {
  //   Character
  // }
};
</script>

<style>
body {
  background: #263238;
}

.link, .link:hover, .link:visited, .link:active {
  color: #4FC08D
}

#app {
  color: white;
  margin-top: 60px;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
