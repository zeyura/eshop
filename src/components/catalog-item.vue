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
                        <img :src=" require(`../assets/images/${product.image[currentImg]}.jpg`) " alt="img">

                    <div class="thumbs">
                        <div
                                class="thumbs-wrap"
                                v-for="index in product.image.length"
                                @click="showThumb(index - 1)"
                                @mouseenter="showThumb(index - 1)"
                        >
                            <img :src=" require(`../assets/images/${product.image[index - 1]}.jpg`) " alt="img">
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup-right">
                <p v-if="product.discount" class="catalog-item__price old-price">
                    Old price: <b>{{product.price | dFormat}} <span>$</span></b>
                </p>
                <p v-if="product.discount" class="catalog-item__price new-price">
                    <b>{{product.price | discount(product.discount) | dFormat}} <span>$</span></b>
                </p>

                <p v-if="!product.discount" class="catalog-item__price">
                    <b>{{product.price | dFormat}} <span>$</span></b>
                </p>

                <p class="catalog-item__categ">OS: {{product.category}}</p>
                <p class="catalog-item__article">Art: {{product.article}}</p>
                <p class="catalog-item__count" v-if="product.count > 5">Qnt: {{product.count}}</p>
                <p class="catalog-item__count warning" v-else-if="product.count > 0">Qnt: {{product.count}}</p>
                <p class="catalog-item__count error" v-else>Qnt: {{product.count}}</p>
                <p class="catalog-item__color" :class="product.color"></p>
            </div>

        </popup>

        <div
                class="catalog-item__img img"
                @mouseenter="showAltImg=true"
                @mouseleave="showAltImg=false"
        >
                <img v-if="!showAltImg"
                     :src=" require(`../assets/images/${product.image[0]}.jpg`) "
                     alt="img" style="cursor: pointer"
                     @click="showPopupInfo"
                >
                <img v-else
                     :src=" require(`../assets/images/${product.image[1]}.jpg`) "
                     alt="img" style="cursor: pointer"
                     @click="showPopupInfo"
                >
        </div>
        <h4 class="catalog-item__name">{{product.name}}</h4>

        <p class="catalog-item__price is-discount" v-if="product.discount">
            {{product.price | discount(product.discount) | dFormat }} <span>$</span>
        </p>
        <p class="catalog-item__price" v-else>
            {{product.price | dFormat }} <span>$</span>
        </p>

        <button class="catalog-item-info__btn btn"
            @click="showPopupInfo"
        >
            Info
        </button>

        <button v-if="product.count === 0"
                class="catalog-item__btn btn no-goods"
        >
            No goods
        </button>
        <button v-else-if="!addedToCart || !inCart"
                class="catalog-item__btn btn"
                @click="addToCart"
        >
            Add to Cart
        </button>
        <button v-else
                class="catalog-item__btn btn added-cart"
                @click="gotoCart"
        >
            In Cart...
        </button>

        <div class="catalog-item__discount" v-if="product.discount">
            -{{product.discount}}%
        </div>

        <div class="catalog-item__ends" v-if="product.count > 0 && product.count < 5">Ends</div>
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
            currentImg: 0,
            isPopupInfoVisible: false,
            addedToCart: false,
            showAltImg: false
        }),
        computed: {

        },
        watch: {

        },
        methods: {
            showThumb(i) {
                this.currentImg = i;
            },
            gotoCart() {
                this.$emit('gotoCart');
            },
            addToCart() {
               // console.log( this.product.article )
                this.$emit('addToCart', this.product);
                this.addedToCart = true;
            },
            showPopupInfo() {
                this.isPopupInfoVisible = true;

                document.body.classList.add('fixed');
            },
            hidePopupInfo() {
                this.isPopupInfoVisible = false;

                document.body.classList.remove('fixed');
            }
        },
        mounted() {

        }

    }
</script>

<style lang="scss">
    .fixed {
        overflow: hidden;
    }

    .catalog-item {
        box-shadow: 0 1px 4px rgba(1,1,1,.22);
        position: relative;
        padding: 15px 10px;
        margin: 0 0 20px;

        &__img {
            max-width: 100%;
            height: 250px;
        }

        &__name {
            font-size: 1.2rem;
            line-height: 1.25;
            height: 1.4rem;
            overflow: hidden;
            margin: 1rem 0;
        }

        &__price {
            font-weight: bold;
            opacity: .9;
            font-size: 1.4rem;

            &.is-discount {
                color: red;
            }
        }

        &__discount {
            position: absolute;
            right: 10px; top: 10px;
            background-color: #f44336;
            padding: 1px 5px;
            color: white;
            font-weight: bold;
            font-size: 14px;
            border-radius: 10px;
        }

        &__ends {
            position: absolute;
            left: 10px; top: 10px;
            background-color: orange;
            padding: 1px 5px;
            color: white;
            font-weight: bold;
            font-size: 14px;
            border-radius: 4px;
        }

        &__color {
            width: 36px;
            height:36px;
            border-radius: 50%;

            &.black {background-color: #333!important;}
            &.gray  {background-color: #808080 !important;}
            &.green {background-color: #61bfa9 !important;}
            &.blue  {background-color: #4e91e4 !important;}
            &.white {border: 1px solid #ddd;}
            &.charcoal{background-color: #8498a4 !important;}
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
            cursor: pointer;
            box-shadow: none;
            opacity: .85;
            transition: opacity .2s;
            &:hover {
                opacity: 1;
            }
        }
        .no-goods {
            background-color: #e3e5e8;
            color: #888;
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
            &__btn {
                margin-right: 3px;
                margin-left: 3px;
                padding: 0 8px;
                font-size: 11px;
            }
            &-info__btn {
                margin-right: 3px;
                padding: 0 8px;
                font-size: 11px;
            }
        }

    }
</style>