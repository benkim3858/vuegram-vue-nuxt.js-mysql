<template>
    <div class="main">
        <div class="main_header">
            <img src="~/assets/img/vuegram_logo.png">
        </div>
        <Post />

        
    </div>
</template>

<script>
export default {
    layout: 'default',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scope>
.main{
    height: 100%;
    width: 500px;
    .main_header {
        img {
            max-width: 30%;
            max-height: 30%;
            display: block;
            margin: auto;
        }
    }
}
</style>