<template>
    <div class="catalog">
        <h1>Catalog</h1>

        <div class="catalog-list">

            <catalog-item
                v-for="product in products"
                :key="product.id"
                :product="product"
                @addToCart="addToCart"
            />

        </div>

    </div>
</template>

<script>
    import CatalogItem from '@/components/catalog-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "catalog",
        components: {
            CatalogItem
        },
        data: () => ({

        }),
        mounted() {
            this.getProducts()
                .then(res => {
                    if(res.data) {
                       // console.log('Data is..');
                    }
                });
            ////////////

        },
        computed: {
            ...mapGetters([
                'products'
            ])
        },
        methods: {
            ...mapActions([
                'getProducts',
                'addProductToCart'
            ]),
            addToCart(data) {
                this.addProductToCart(data);
            }
        }
    }
</script>

<style lang="scss">
    .catalog {
        width: 100%;
        display: block;

        &-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

    }
</style>