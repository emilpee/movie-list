<template>
  <div>
    <div class="movielist" v-for="movie in movies" :key="movie.id">
      <router-link :to="{ name:'name', params: { name: movie.name } }"> 
        <h2> {{ movie.name }} </h2> 
      </router-link>
      <ul>
        <li><strong>Director:</strong> {{ movie.director }}</li>
        <li><strong>Year:</strong> {{ movie.year }}</li>
        <li><strong>Actors:</strong> {{ movie.actors.join(', ') }}</li>
        <li> <strong>Category: </strong> 
          <router-link :to="{ name: 'category', params: {category:movie.category} }"> {{ movie.category }} </router-link>
        </li>
      </ul>
    </div>
    <button @click="logout" type="button">Log out</button>
  </div>
</template>

<script>
import {fb} from '../../firebase-config';

export default {
  name: 'MovieList',
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  methods: {
    logout: function() {
      fb.auth().signOut().then(() => {
      this.$router.replace('login')
      })
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movielist {
  width: 700px;
  background-color: rgb(234, 200, 241);
  margin: 0 auto;
  padding: 1%;
  border-top: 5px dotted black;
  box-shadow: 3px 4px 3px rgb(122, 118, 118)
}
div :first-child {
  border: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: circle;
  padding: 0;
}
li {
  display: block;
  margin: 10px 10px;
}
a {
  color: #42b983;
}
button {
  font-size: 15px;
  padding: 20px;
  margin-top: 1%;
  color: white;
  background-color: #42b983;
}
</style>
