<template>
    <div class="login">
      <h3>Please log in to see my film list!</h3>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password" @keyup.enter="login"><br>
      <span> 
        <strong> {{ errorMsg }} </strong> 
      </span> 
      <br>
      <button @click="login">Log in</button>
      <p>Or <router-link to="/sign-up">sign up</router-link> for an account.</p>
    </div>
</template>
 

<script>
import {fb} from '../../firebase-config'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      errorMsg: ''
    };
  },
  methods: {
    login: function() {
      fb.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
        },
        (err) => {
          this.errorMsg = 'Oops! ' + err.message;
        }
      );
    },
  }
}
</script>

<style scoped>
.login {
  padding: 1%;
}
input {
  margin: 8px 0;
  width: 20%;
  padding: 10px;
}
button {
  margin-top: 20px;
  width: 10%;
  padding: 5px;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
a {
  color: rgb(255, 67, 67);
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
span {
    color: rgb(219, 9, 9);
    font-weight: bold;
}
</style>
