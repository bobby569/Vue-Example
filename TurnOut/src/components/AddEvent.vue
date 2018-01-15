<template>
  <div>
    <h4>Add Event</h4>
    <input type="checkbox" v-model="showForm">
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" v-model="event.title">
      </div>
      <div class="form-group">
        <label for="title">Desciption</label>
        <input type="text" class="form-control" v-model="event.desc">
      </div>
      <div class="form-group">
        <label for="title">Date</label>
        <input type="date" class="form-control" v-model="event.date">
      </div>
      <div class="form-group">
        <label for="title">Location</label>
        <input type="text" class="form-control" v-model="event.location">
      </div>
      <button class="btn btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from '../firebase';

export default {
  name: '',
  data() {
    return {
      event: {
        title: '',
        desc: '',
        date: '',
        location: '',
        email: ''
      },
      showForm: false
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    }
  }
};
</script>

<style>
.from {
  padding: 10%
}
</style>
