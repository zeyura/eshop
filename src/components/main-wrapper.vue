<template>
    <div class="main-wrapper">
        <catalog>

        </catalog>
    </div>
</template>

<script>
    import Catalog from '@/components/catalog'
    import Cart from '@/components/cart'
    export default {
        name: "main-wrapper",
        components: {
            Catalog, Cart
        },
        data: () => ({

        }),

    }
</script>

<style lang="scss">
    .main-wrapper {
        max-width: 1200px;
        margin: auto;
    }
</style>