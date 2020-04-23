<template>
    <div class="modal">
        <h2>Filme {{ movie.title }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            movie: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>
    .modal {
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        background-color: #fffff9;
        z-index: 2;
    }
</style>