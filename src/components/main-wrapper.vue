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
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: auto;
    }
</style>