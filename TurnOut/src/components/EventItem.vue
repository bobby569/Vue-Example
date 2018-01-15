<template>
  <div class="col-md-4">
    <div class="event-card">
      <h4 class="card-title">{{ event.title }}</h4>
      <p class="card-text">{{ event.desc }}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Date: {{ event.date }}</li>
        <li class="list-group-item">Location: {{ event.location }}</li>
        <li class="list-group-item">Host: {{ event.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['event']
};
</script>

<style>
.event-card {
  border: 2px solid #2C3E50;
  margin-top: 10px;
  border-radius: 4px;
}
</style>
