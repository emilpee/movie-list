<template>
    <div class="sign-up">
      <h3>Create a new account!</h3>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <span> 
        <strong> {{ errorMsg }} </strong> 
      </span> 
      <br>
      <button @click="signUp">Sign Up</button>
      <p>Already have an account? <br>
       Go back to <router-link to="/login">login</router-link>.
      </p>
    </div>
</template>

<script>
import {fb} from '../../firebase-config'

export default {
  name: 'signUp',
  data() {
    return {
        email: '',
        password: '',
        errorMsg: ''
    };
  },
  methods: {
    signUp() {
      fb.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
            this.$router.replace('home')
        },
        (err) => {
            this.errorMsg = 'Sign up failed: ' + err.message
        }
      );
    }
  }
}
</script>

<style scoped>
.sign-up {
  padding: 1%;
  color: rgb(37, 34, 34);
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
span {
    color: rgb(219, 9, 9);
    font-weight: bold;
}
p {
    font-size: 13px;
    margin-top: 40px;
    line-height: 1.6em;
}
a {
  color: rgb(255, 67, 67);
}
</style>
