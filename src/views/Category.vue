<template>
  <div class="category">
        <router-link to="/home"> <button> &#8592; Filmlist</button> </router-link>
        <div v-for="movie in movie" :key="movie.category" class="item">
            <router-link :to="{ name:'name', params: { name: movie.name } }"> 
              <h3> {{movie.name}} </h3> 
            </router-link>
            <span> {{ movie.category }} </span>
        </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'category',
  computed: {
    movie() {
      var category = this.$route.params.category;
      return this.$store.state.movies.filter(function(movie) {
        return movie.category == category
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category {
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
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
span {
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
}
button {
  padding: 25px;
  font-size: 18px;
  background-color: white;
  color: #42b983;
  position: sticky;
  margin-right: 100%;
}
.item {
  padding-bottom: 2%;
}
</style>
