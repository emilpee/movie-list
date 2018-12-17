<template>
  <div class="movie">
        <div v-for="movie in movies" :key="movie.name">
           <router-link to="/home"> <button> &#8592; Filmlist</button> </router-link>
            <h1> {{ movie.name }} </h1>
            <h3> {{ movie.year }} </h3>
            <ul>
              <li> <strong>Director:</strong> {{ movie.director }} </li>
              <li> <strong>Actors:</strong> {{ movie.actors.join(', ') }} </li>
            </ul>
            <br>
            <img :src="movie.image" :alt="movie.image" /> 
            <p id="desc"> {{ movie.description }} </p>
            <router-link :to="{ name: 'category', params: {category:movie.category} }"> 
              <p>View all <a>{{ movie.category.toLowerCase() }}s</a></p> 
            </router-link>
            <br>
        </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'movietitle',
  computed: {
    movies() {
      var name = this.$route.params.name;
      return this.$store.state.movies.filter(function(movie) {
        return movie.name == name
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie {
    width: 800px;
    margin: 0 auto;
    border: 10px groove gray;
    background-color: rgb(234, 200, 241);
    height: 100%;
}
h3 {
  margin: 40px 0 0;
}
h3::before {
    list-style-type: circle;
}
ul {
  list-style-type: none;
}
li {
  margin: 10px 10px;
}
a {
  color: #42b983;
}
img {
    width: 200px;
    border: 2px groove gray;
    padding: 1%;
}
#desc {
    margin: 2%;
    padding: 3%;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}
button {
  padding: 25px;
  font-size: 18px;
  background-color: white;
  color: #42b983;
  position: sticky;
  margin-right: 100%;
}
</style>
