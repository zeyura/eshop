<template>
    <div class="catalog">
        <router-link :to="{name:'cart', params: {cart_data: cart}}" >
            <div class="catalog__link_to_cart">
                Cart: {{cart.length}}
            </div>
        </router-link>

        <h1>Catalog</h1>

        <div class="row">
            <div class="input-field col s9 m4 l3" style="margin-bottom: 2px">
                <select v-model="filter" ref="select" @change="sortByCategories">
                    <option
                            v-for="cat in categories"
                            :key="cat.value"
                            :value="cat.value"
                    >
                        {{cat.name}}
                    </option>
                </select>
                <label>Select OS</label>
            </div>
        </div>

        <div class="catalog-list row">

            <div class="col s12 m4 l3"
                 v-for="product in displayProducts"
                 :key="product.id"
            >
                <catalog-item
                    :product="product"
                    @addToCart="addToCart"
                />
            </div>

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
            filter: 'all',
            select: null,
            categories: [
                {'name': 'All', value: 'all'},
                {'name': 'iOS', value: 'ios'},
                {'name': 'Android', value: 'android'}
            ],
            sortedProducts: []
        }),
        watch: {
            filter(categorie) {
              //  console.log(categorie)
            }
        },
        mounted() {
            this.getProducts()
                .then(res => {
                    if(res.data) {
                        // console.log('Data is..');
                    }
                });
            ////////////

            let select = M.FormSelect.init(this.$refs.select, {});
            M.updateTextFields();
        },
        computed: {
            ...mapGetters([
                'products',
                'cart'
            ]),
            displayProducts() {
                if(this.sortedProducts.length) {
                    return this.sortedProducts;
                } else {
                    return this.products;
                }
            }
        },
        methods: {
            ...mapActions([
                'getProducts',
                'addProductToCart'
            ]),
            sortByCategories() {
                this.sortedProducts = [];
                this.products.forEach(item => {
                    if(this.filter === 'all' || item.category === this.filter) {
                        this.sortedProducts.push(item);
                    }
                })
            },
            addToCart(data) {
                this.addProductToCart(data);
            }
        },

        destroyed() {
            if( this.select && this.select.destroy) {
                this.select.destroy();
            }
        }
    }
</script>

<style lang="scss">
    .catalog {
        width: 100%;
        display: block;

        &-list {}

    }

    .catalog__link_to_cart {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 15px;
        border: 1px solid #ddd;
        cursor: pointer;
    }

    .dropdown-content li>a, .dropdown-content li>span {
        color: #667;
    }
</style>