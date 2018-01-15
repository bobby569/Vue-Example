<template>
  <div>
    <h3>DashBoard Component</h3>
    <button class="btn btn-danger btn-sm sign-out" @click="signOut">Sign Out</button>
    <AddEvent />
    <hr>
    <div class="row">
      <EventItem
        v-for="(item, idx) in this.$store.state.events"
        :key="idx"
        :event="item"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebase';
import AddEvent from './AddEvent.vue';
import EventItem from './EventItem.vue';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = [];
      snap.forEach(e => events.push(e.val()));
      this.$store.dispatch('setEvents', events);
    });
  }
};
</script>

<style>
.sign-out {
  position: absolute;
  text-align: right;
  top: 60px;
  right: 40px;
}
</style>
