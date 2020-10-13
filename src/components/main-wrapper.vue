<template>
    <div class="main-wrapper">

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>
    export default {
        name: "main-wrapper",
        data: () => ({

        }),
        computed: {

        },
        methods: {

        },
        watch: {

        },
        mounted() {

        }



    }
</script>

<style lang="scss">
    .main-wrapper {
        max-width: 1200px;
        margin: auto;
    }
</style>