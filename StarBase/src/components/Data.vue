<template>
  <div class="row">
    <Item
      v-for="(item, idx) in items"
      :key="idx"
      :item="item"
    ></Item>
  </div>
</template>

<script>
import axios from 'axios';
import Item from './Item.vue';

export default {
  data() {
    return {
      type: this.$route.params.type,
      items: []
    };
  },
  watch: {
    $route: 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.items = [];
      this.type = this.$route.params.type;
      const init_ids = [1, 13, 14];

      for (let i in init_ids) {
        const id = init_ids[i];
        axios
          .get(`https://swapi.co/api/${this.type}/${id}`)
          .then(res => this.items.push(res.data));
      }
    }
  },
  created() {
    this.fetchItems();
  },
  components: {
    Item
  }
};
</script>
