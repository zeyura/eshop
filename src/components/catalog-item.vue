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
        padding: 2 * $padding;
        margin: 0 0 20px;

        &__img {
            max-width: 100%;
            height: 250px;

            img {

            }
        }

        &__name {
            font-size: 1.6rem;
        }

        &__price {

        }

        &__btn {

        }
    }
</style>