<template>
    <div class="catalog-item">
        <div class="catalog-item__img img">
            <a href="">
                <img :src=" require(`../assets/images/${product.image}`) " alt="img">
            </a>
        </div>
        <h4 class="catalog-item__name">{{product.name}}</h4>
        <p class="catalog-item__price">Price: {{product.price}} руб</p>
        <button class="catalog-item__btn btn" @click="sendDataToParent">Add to Cart</button>
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
            sendDataToParent() {
               // console.log( this.product.article )
                this.$emit('sendArticle', this.product.article);
            }
        }

    }
</script>

<style lang="scss">
    .catalog-item {
        flex-basis: calc(25% - 20px);
      //  border: 1px solid #eee;
        box-shadow: 0 1px 4px rgba(1,1,1,.22);
        padding: 2 * $padding;
        margin: $margin;

        &__img {
            max-width: 100%;

            img {
                height: 200px;
            }
        }

        &__name {

        }

        &__price {

        }

        &__btn {

        }
    }
</style>