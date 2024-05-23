const { createApp } = Vue;

createApp({
    data() {
        return {
            movies: null
        }
    },
    created() {
        axios.get('http://localhost:8888/boolean/php-dischi-json/server.php').then((resp) => {
            this.movies = resp.data.results;
        });
    }
}).mount('#main');