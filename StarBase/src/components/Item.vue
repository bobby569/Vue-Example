<template>
  <div class="col-md-4">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{ item.name }}</h4>
        <div v-for="(val, key, idx) in item" :key="idx">
          <div v-if="idx < 5">
            <strong>{{key}}</strong>: {{val}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
};
</script>

<style scoped>
.item-card {
  border: 2px solid #4FC08D;
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 10px;
  cursor: pointer;
}
</style>
