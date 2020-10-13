<template>
    <div class="cart">

        <router-link :to="{name:'catalog'}" >
            <div class="cart__link_to_catalog">
                Back to Catalog
            </div>
        </router-link>

        <h1>Cart</h1>

        <div class="cart-items-list">

            <cart-item
                    v-for="(item, i) in cart_data"
                    :key="i"
                    :cart_item_data="item"
                    @deleteFromCart="delFromCart(i)"
            />

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

        },
        methods: {
            ...mapActions([
                'deleteFromCart',
            ]),
            delFromCart(i) {
                this.deleteFromCart(i);
            }
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;

        &__img {
            img {
                height: 100px;
            }
        }

        &__name {
            font-weight: bold;
        }

        &__article {
            font-size: 12px;
            opacity: .8;
        }

        &__btn {
            font-size: 12px;
            height: 25px!important;
            line-height: 25px!important;
        }
    }

    .cart__link_to_catalog {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 15px;
        border: 1px solid #ddd;
        cursor: pointer;
    }

</style>