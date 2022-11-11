const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            email: [],
        };
    },
    methods: {
        getApi() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get(this.apiUrl)
                    .then((result) => {
                        this.email.push(result.data.response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    },
    mounted() {
        this.getApi();
    },
}).mount('#app');
