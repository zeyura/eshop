<template>
    <div class="catalog">
        <router-link :to="{name:'cart', params: {cart_data: cart}}" >
            <div class="catalog__link_to_cart">
                Cart: {{cart.length}}
            </div>
        </router-link>

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
                'products',
                'cart'
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

    .catalog__link_to_cart {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 15px;
        border: 1px solid #ddd;
        cursor: pointer;
    }
</style>