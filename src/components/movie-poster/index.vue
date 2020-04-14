<template>
    <div class="movie-poster">
        <div class="movie-image">
            <img :src="image" />
        </div>
        <div class="movie-price">
            <p>R${{ totalPriceWithTax }}</p>
        </div>
        <div class="movie-title">
            <h1>{{ title }}</h1>
        </div>
        <div class="movie-length">
            <p>{{ length }}</p>
        </div>
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
            },
            price: {
                type: [Number, String],
                default: 0
            }
        },
        computed: {
            totalPriceWithTax() {
                return this.price * 1.03;
            }
        }
    }
</script>

<style scoped>
    .movie-poster {
        position: relative;
        text-align: center;
        min-height: 304px;
        min-width: 300px;
        max-height: 304px;
        max-width: 300px;
        margin: 20px;
        overflow: hidden;
        color: #fff;
        text-shadow: 2px 2px #000;
        border-radius: 50px;
		box-shadow: 0 10px 20px 2px #999; 
    }

    .movie-image {
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .movie-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(2px); 
    }

    .movie-title {
        position: absolute;
        width: 100%;
        top: 0;
        z-index: 1;
    }

    .movie-length {
        position: absolute;
        width: 50%;
        bottom: 0;
        z-index: 1;
    }

    .movie-price {
        position: absolute;
        width: 50%;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
</style>