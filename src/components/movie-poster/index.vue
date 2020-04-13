<template>
    <div class="movie-poster">
        <img class="movie-image" :src="image" />
        <h1 class="movie-title">{{title}}</h1>
        <p class="movie-length">{{length}}</p>
    </div>
</template>

<script>
    export default {
        name: 'MoviePoster',
        props: {
            title: {
                type: String,
                default: 'No name'
            },
            image: {
                type: String,
                default: 'https://www.bauducco.com.br/wp-content/uploads/2017/09/default-placeholder-1-2.png',
                validator: propValue => {
                    const hasImageDirectory = propValue.indexOf('/images/') > -1;
                    const isPNG = propValue.endsWith('.png');
                    const isJPEG = propValue.endsWith('.jpg') || propValue.endsWith('.jpeg');
                    const hasValidExtension = isPNG || isJPEG;

                    return hasImageDirectory && hasValidExtension;
                }
            },
            length: {
                type: [Number, String],
                default: 90
            }
        }
    }
</script>

<style scoped>
    .movie-poster {
        position: absolute;
        margin: 20px;
        overflow: hidden;
    }

    .movie-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    .movie-title {
        top: 0;
        left: 50%;
        z-index: 1;
    }
</style>