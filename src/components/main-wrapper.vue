<template>
    <div class="main-wrapper">

        <v-header></v-header>

        <div class="main-content">

            <keep-alive>
                <router-view></router-view>
            </keep-alive>

        </div>

    </div>
</template>

<script>
    import vHeader from "./v-header.vue"

    export default {
        name: "main-wrapper",
        data: () => ({

        }),
        components: {
            vHeader
        },
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
        padding-top: 80px;
        padding-bottom: 20px;
    }

    .main-content {
        max-width: 1200px;
        margin: auto;
    }
</style>