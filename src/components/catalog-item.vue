<template>
    <div class="catalog-item">
        <div class="catalog-item__img img">
            <a href="">
                <img :src=" require(`../assets/images/${product.image}`) " alt="img">
            </a>
        </div>
        <h4 class="catalog-item__name">{{product.name}}</h4>
        <p class="catalog-item__price">Price: {{product.price}} RUB</p>
        <button class="catalog-item__btn btn"
                @click="addToCart"
        >
            Add to Cart
        </button>
    </div>
</template>

<script>
    export default {
        name: "catalog-item",
        props: {
            product: {
                type: Object,
                default() {
                    return {}
                }
            }
        },

        methods: {
            addToCart() {
               // console.log( this.product.article )
                this.$emit('addToCart', this.product);
            }
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