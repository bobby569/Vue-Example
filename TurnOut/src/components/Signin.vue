<template>
  <div>
    <form>
      <h3>Sign In</h3>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Email" v-model="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="password">
      </div>
      <button class="btn btn-primary" @click.prevent="signIn">Sign In</button>
    </form>

    <p>{{ error.message }}</p>

    <div>
      Not a user? <router-link to="/signup">Sign up</router-link>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
