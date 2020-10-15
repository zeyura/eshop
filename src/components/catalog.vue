<template>
    <div class="catalog" :class="{'mobile': isMobile, 'desktop': isDesktop}">
        <router-link :to="{name:'cart', params: {cart_data: cart}}" >
            <div class="catalog__link_to_cart">
                Cart: {{cart.length}}
            </div>
        </router-link>

        <h1>Catalog</h1>

        <div class="row">

            <div class="range-slider-wrap col s12 m8 l9">
                <div class="range-slider">
                    <input
                            type="range"
                            min="1000"
                            max="20000"
                            step="10"
                            v-model.number="minPrice"
                            @change="setRangeSlider"
                    >
                    <input
                            type="range"
                            min="1000"
                            max="20000"
                            step="10"
                            v-model="maxPrice"
                            @change="setRangeSlider"
                    >

                    <div class="range-values">
                        <p>{{minPrice}}</p>
                        <p>{{maxPrice}}</p>
                    </div>
                </div>

            </div>

            <div class="input-field col s9 m4 l3" style="margin-bottom: 2px">
                <select
                        v-model="filter"
                        ref="select"
                        @change="sortByCategories"
                >
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
                    :inCart="productsInCart.includes(product.id)"
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
            itemKey: 1,
            filter: 'all',
            select: null,
            categories: [
                {'name': 'All', value: 'all'},
                {'name': 'iOS', value: 'ios'},
                {'name': 'Android', value: 'android'}
            ],
            sortedProducts: [],

            minPrice: 1000,
            maxPrice: 20000
        }),
        watch: {
            filter(categorie) {
              //  console.log(categorie)
            },
            productsInCart(id) {
               // this.itemKey = Date.now();
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
                'isDesktop',
                'isMobile',
                'products',
                'cart',
                'productsInCart'
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
                });
                this.sortedProducts = this.sortedProducts.filter(p => {
                    return p.price >= this.minPrice && p.price <= this.maxPrice;
                })
            },
            addToCart(data) {
                this.addProductToCart(data);
            },

            setRangeSlider() {
                if(this.minPrice > this.maxPrice) {
                    let t = this.minPrice;
                    this.minPrice = this.maxPrice;
                    this.maxPrice = t;
                }
                this.sortByCategories();
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

    // Range Slider
    .range-slider {
        width: 240px;
        margin: auto 16px;
        text-align: center;
        position: relative;
        top: 60px;

        svg , input[type=range] {
            position: absolute;
            left:0;
            bottom:0;
        }

    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }

    .range-slider-wrap {
        height: 70px;
    }

    .range-values {
        width: 240px;
        font-size: 12px;
        text-align: center;
        position: absolute;
        top: -20px;
        display: flex;
        justify-content: space-between;
    }

    /// -----

</style>