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
    },
    methods: {
        like(index) {
            console.log(index);
            axios.post("http://localhost:8888/boolean/php-dischi-json/server.php", {
                params: {
                    index
                }
            }).then((resp) => {
                console.log(resp);
            })
        }
    }
}).mount("#main");