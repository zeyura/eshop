<template>
    <div class="main-header">
        <router-link tag="div" class="logotype" to="/">
            <img src="../assets/images/logo.png" alt="logo" class="logo">
            <h1 class="main-header-title">Online Shop</h1>
        </router-link>

        <div class="search">
            <input type="text" class="search__input" placeholder="input name, price or color"
                v-model="searchVal"
                   @keyup.13="search"
                   @keyup.27="clearSearch"
            >
            <span class="search__btn" @click="search">
                <i class="material-icons">search</i>
            </span>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "v-header",
        data: () => ({
            searchVal: ''
        }),
        methods: {
            ...mapActions([
                'setSearchValue', 'getProducts'
            ]),

            search() {
                this.setSearchValue(this.searchVal);
                if( this.$route.path !== '/catalog' ) this.$router.push('/catalog');
            },

            clearSearch() {
                this.searchVal = '';
                if(this.$route.path === '/catalog') {
                    this.setSearchValue('');
                }
            }

        }
    }
</script>

<style lang="scss" scoped>

    .main-header {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-bottom: 1px solid #999;
       //box-shadow: 0 1px 3px rgba(1,1,1,.3);
        height: 80px;
        padding: 5px 20px;
        z-index: 99;

        &-title {
            display: inline;
            vertical-align: super;
            font-size: 40px;
            position: relative;
            top: -5px; left: 10px;
        }

        @media (max-width: 639px) {
            &-title { display: none!important;}
        }
    }

    .logotype {
        height: 100%;
        cursor: pointer;

        img {

            vertical-align: bottom;
        }
    }

    .search {
        text-align: left;
        width: 275px;
        position: relative;
        right: 0;
        top: 2px;

        &__input {
            padding: 5px 15px !important;
            height: 40px!important;
            color: #333;
            background-color: aliceblue !important;
            border: none!important;
            max-width: 250px;
        }

        &__btn {
            position: absolute;
            top: 11px;
            right: -2px;
            cursor: pointer;
            padding: 5px;
            width: 40px;
            height:40px;
            opacity: .6;
            &:hover {
                opacity: .95;
            }
        }
    }



</style>