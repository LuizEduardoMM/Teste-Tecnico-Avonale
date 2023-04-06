<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">
<template>


<div class="container">
    <h1>Lista de Filmes</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id" @click="showDetails(movie)">
        {{ movie.title}}
      </li>
    </ul>
    <div v-if="selectedMovie" class="modal">
      <h2>{{ selectedMovie.title }}</h2>
      <img :src="'https://image.tmdb.org/t/p/w200/' + selectedMovie.poster_path" />
      <p><strong>Resumo:</strong> {{ selectedMovie.overview }}</p>
      <p><strong>Data de Lançamento:</strong> {{ selectedMovie.release_date }}</p>
      <p><strong>Nota:</strong> {{ selectedMovie.vote_average }}</p>


    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd86c6d30f8f24dcf9c25c201cf5551aa';

export default {
  data() {
    return {
      movies: [],
      selectedMovie: null,
    };
  },
  mounted() {
    axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`).then(response => {
      this.movies = response.data.results;
    });
  },
  methods: {
    showDetails(movie) {
      this.selectedMovie = movie;
    },
  },
};
</script>

<style>

@font-face {
  font-family: "Roboto Regular";
  src: local("Roboto Regular"),   url(../fontes/Roboto-Regular.ttf) format("truetype");}



.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 5px;
  cursor: pointer;
  color: #1232b6;
font-family: "Roboto Regular",Arial;
  width: 320px;
  margin-bottom: 20px;
  margin-left: 200px;
  border-bottom: 1px solid #1232b6;
  border-top: 1px solid #1232b6;
  border-right: 1px solid #1232b6;
  border-left: 1px solid #1232b6;
  background-color: #ee974f;
  position: relative;
  border-radius: 15px;
  justify-content: center;
  display: flex;
}

li:hover{
background-color: #e76b1f;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ccfbaa;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 600px;
  margin-top: 100px;
  margin-left: 1200px;
  z-index: 1;
  color: black;
  font-family: "Roboto Regular";
  border-radius: 20px;
  font-size: 1.4rem;

}
.modal p{
  line-height: 27px;
}
h1 {
  margin-left: 260px;
  color: yellow;
  font-family: "Roboto Regular",Arial;
  justify-content: center;
}

h2 {
  margin-top: 0;
}
body{
color: #151313;
}
</style>
