<template>
    <div class="catalog-item">

        <popup
                v-if="isPopupInfoVisible"
                @closePopup="hidePopupInfo"
                @rightBtnAction="addToCart"
                :popupTitle="product.name"
                rightBtnName="Add to cart"
                :inCart="inCart"
        >

            <div class="popup-left">
                <div class="catalog-item__img img">
                    <a href="">
                        <img :src=" require(`../assets/images/${product.image}`) " alt="img">
                    </a>
                </div>
            </div>
            <div class="popup-right">
                <p class="catalog-item__price">Price: <b>{{product.price | currency}}</b></p>
                <p class="catalog-item__categ">OS: {{product.category}}</p>
                <p class="catalog-item__article">Art: {{product.article}}</p>
                <p class="catalog-item__count" v-if="product.count > 5">Qnt: {{product.count}}</p>
                <p class="catalog-item__count warning" v-else-if="product.count > 0">Qnt: {{product.count}}</p>
                <p class="catalog-item__count error" v-else>Qnt: {{product.count}}</p>
            </div>

        </popup>

        <div class="catalog-item__img img">
                <img :src=" require(`../assets/images/${product.image}`) " alt="img" style="cursor: pointer"
                     @click="showPopupInfo"
                >
        </div>
        <h4 class="catalog-item__name">{{product.name}}</h4>
        <p class="catalog-item__price">Price: {{product.price | currency}}</p>

        <button class="catalog-item-info__btn btn"
            @click="showPopupInfo"
        >
            Info
        </button>
        <button v-if="!addedToCart || !inCart"
                class="catalog-item__btn btn"
                @click="addToCart"
        >
            Add to Cart
        </button>
        <button v-else
                class="catalog-item__btn btn added-cart"
        >
            In Cart...
        </button>
    </div>
</template>

<script>
    import Popup from './popup'
   // import {mapGetters} from 'vuex'

    export default {
        name: "catalog-item",
        components: {
          Popup
        },
        props: {
            product: {
                type: Object,
                default() {
                    return {}
                }
            },
            inCart: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
           isPopupInfoVisible: false,
           addedToCart: false

        }),
        computed: {

        },
        watch: {

        },
        methods: {
            addToCart() {
               // console.log( this.product.article )
                this.$emit('addToCart', this.product);
                this.addedToCart = true;
            },
            showPopupInfo() {
                this.isPopupInfoVisible = true;
            },
            hidePopupInfo() {
                this.isPopupInfoVisible = false;
            }
        },
        mounted() {

        }

    }
</script>

<style lang="scss">
    .catalog-item {
        box-shadow: 0 1px 4px rgba(1,1,1,.22);
        padding: 15px 10px;
        margin: 0 0 20px;

        &__img {
            max-width: 100%;
            height: 250px;
        }

        &__name {
            font-size: 1.6rem;
        }

        &__price {

        }

        &__btn {
            margin-right: 5px;
            margin-left: 5px;
            padding: 0 12px;
        }
        &-info__btn {
            background-color: transparent!important;
            margin-right: 10px;

        }
        .added-cart {
            background-color: #9adeaa;
            cursor: default;
            box-shadow: none;
        }

        @media (min-width: 993px) and (max-width: 1200px) {
            &__img {
                height: 200px;
            }
        }

        @media (min-width: 768px) and (max-width: 992px) {
            &__img {
                height: 180px;
            }
        }

        @media (min-width: 601px) and (max-width: 767px) {
            &__img {
                height: 140px;
            }
        }

    }
</style>