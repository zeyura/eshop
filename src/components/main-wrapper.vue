<template>
    <div class="main-wrapper">
        <catalog />

        <cart
                v-if="cart.length"
                :cart_data="cart"
        />
    </div>
</template>

<script>
    import Catalog from '@/components/catalog'
    import Cart from '@/components/cart'

    import {mapGetters} from 'vuex'

    export default {
        name: "main-wrapper",
        components: {
            Catalog, Cart
        },
        data: () => ({

        }),
        computed: {
            ...mapGetters(['cart']),

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