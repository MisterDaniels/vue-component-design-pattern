<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="movies-list">
      <MoviePoster title="Framework" image="/images/image.png" length="120" />
      <MoviePoster image="/images/image.png" length="120" />
      <MoviePoster title="Framework" length="120" />
      <MoviePoster title="Framework" image="/images/image.png" />
    </div>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MoviePoster from './components/movie-poster';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MoviePoster
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.movies-list {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
