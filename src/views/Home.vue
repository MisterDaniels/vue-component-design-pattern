<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Events Stuff</h2>
  
    <h2>Movies Stuff</h2>
    <div class="movies-list">
      <MoviePoster title="Guardiões da Galáxia 2" image="https://www.emaisgoias.com.br/wp-content/uploads/2018/06/guardi%C3%B5es.jpg" length="120" />
      <MoviePoster image="https://i.insider.com/55789809f7b1051e008b5161?width=1100&format=jpeg&auto=webp" length="120" price="20"/>
      <MoviePoster title="Tarzan" length="120" />
      <MoviePoster title="Game of Thrones" image="https://tecnoblog.net/wp-content/uploads/2017/10/game-of-thrones-hbo-personagem-principal-700x467.jpg" />
    </div>
  </div>
</template>

<script>
import MoviePoster from '../components/movie-poster';

export default {
  name: 'Home',
  components: {
    MoviePoster
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
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

  .movies-list {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
</style>
