const { createApp } = Vue;

createApp({
    data() {
        return {
            disks: null
        }
    },
    created() {
        axios.get('http://localhost:8888/boolean/php-dischi-json/server.php').then((resp) => {
            this.disks = resp.data.results;
        });
    }
}).mount("#main");