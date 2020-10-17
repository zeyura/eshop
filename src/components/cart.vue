<template>
    <div class="cart">

        <router-link :to="{name:'catalog'}" >
            <div class="cart__link_to_catalog">
                Back to Catalog
            </div>
        </router-link>

        <h1>Cart</h1>

        <p v-if="!cart_data.length">There are no Products in the cart...</p>
        <div class="cart-items-list">

            <cart-item
                    v-for="(item, i) in cart_data"
                    :key="i"
                    :cart_item_data="item"
                    @deleteFromCart="delFromCart(i)"
                    @increment="increment(i)"
                    @decrement="decrement(i)"
            />

        </div>

        <div class="cart__total right" v-if="cart_data.length">
            Total: <span>{{cartTotal | dFormat}}</span> $
        </div>

    </div>
</template>

<script>
    import CartItem from '@/components/cart-item'

    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "cart",
        components: {
            CartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data: () => ({

        }),
        computed: {
            cartTotal() {
                if(this.cart_data.length) {
                    let res = this.cart_data.reduce((a,b) => {
                        let price = b.price;
                        if(b.discount) price = Math.ceil(price - price * b.discount / 100);
                        return a + price * b.quantity;
                    }, 0);
                    if(res) return res;
                        else return 0;
                } else {
                    return 0;
                }
            }
        },
        methods: {
            ...mapActions([
                'deleteFromCart',
                'incrementCartItem',
                'decrementCartItem'
            ]),

            increment(i) {
                this.incrementCartItem(i);
            },
            decrement(i) {
                this.decrementCartItem(i);
            },

            delFromCart(i) {
                this.deleteFromCart(i);
            },
        }

    }
</script>

<style lang="scss">
    .cart-items-list {
        display: flex;
        margin-bottom: 50px;
        flex-wrap: wrap;
    }

    .cart-item {
        width: 100%;
        margin-bottom: 20px;
        padding: 5px 15px 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;

        &__img {
            img {
                height: 120px;
            }
        }

        &__info {
            flex-basis: 50%;
        }

        &__name {
            font-weight: bold;
            font-size: 1.3rem;
            opacity: .85;
        }

        &__article {
            font-size: 12px;
            opacity: .8;
        }

        &__quantity {
            cursor: default;
            flex-basis: 140px;

            button {
                cursor: pointer;
                margin: 12px;
                width: 28px;
                height: 28px;
            }
        }

        &__btn {
            font-size: 12px;
            height: 25px!important;
            line-height: 25px!important;
        }
    }

    .cart__link_to_catalog {
        position: absolute;
        top: 100px;
        right: 10px;
        padding: 15px;
        border: 1px solid #ddd;
        cursor: pointer;
    }

    .cart__total {
        font-weight: bold;

        span {
            font-size: 2rem;
        }
    }

</style>