<template>
    <div class="cart-item">
        <div class="cart-item__img img">
            <a href="">
                <img :src=" require(`../assets/images/${cart_item_data.image[0]}.jpg`) " alt="img">
            </a>
        </div>
        <div class="cart-item__info">
            <h6 class="cart-item__name">{{cart_item_data.name}}</h6>
            <p class="cart-item__price">Price: {{cart_item_data.price | currency}}</p>
            <p class="cart-item__article">Art: {{cart_item_data.article}}</p>
        </div>
        <div class="cart-item__quantity">
            <button @click="decrementItem">-</button>
            {{cart_item_data.quantity ? cart_item_data.quantity : 1}}
            <button @click="incrementItem">+</button> </div>
        <button class="cart-item__btn btn"
                @click="deleteFromCart"
        >
            Delete
        </button>
    </div>
</template>

<script>
    export default {
        name: "cart-item",
        components: {
        },
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data: () => ({

        }),
        mounted() {
            this.$set(this.cart_item_data, 'quantity', 1);
        },
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            },

            incrementItem() {
                this.$emit('increment');
            },
            decrementItem() {
                this.$emit('decrement');
            },
        }

    }
</script>

<style scoped>
    .cart-item__btn:hover {
        background-color: #fe0909c2;
        color: #eee;
    }
</style>