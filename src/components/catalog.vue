<template>
    <div class="catalog">
        <h1>Catala</h1>

        <div class="catalog-list">

            <catalog-item
                v-for="product in products"
                :key="product.id"
                :product="product"
                @sendArticle="getArticleFromItem"
            />

        </div>

    </div>
</template>

<script>
    import CatalogItem from '@/components/catalog-item'
    export default {
        name: "catalog",
        components: {
            CatalogItem
        },
        data: () => ({
            products: [
                {
                    "id": 1,
                    "image": "1.jpg",
                    "name": "T-shirt",
                    "price": 100,
                    "article": "T1",
                    "available": true,
                    "count": 20
                },
                {
                    "id": 2,
                    "image": "2.jpg",
                    "name": "T-shirt cort",
                    "price": 150,
                    "article": "T2",
                    "available": true,
                    "count": 25
                },
                {
                    "id": 3,
                    "image": "1.jpg",
                    "name": "T-shirt succ",
                    "price": 400,
                    "article": "T3",
                    "available": false,
                    "count": 0
                },
                {
                    "id": 4,
                    "image": "2.jpg",
                    "name": "T-shirt asd",
                    "price": 120,
                    "article": "T4",
                    "available": true,
                    "count": 10
                }
            ]
        }),

        methods: {
            getArticleFromItem(article) {
                alert(article)
            }
        }
    }
</script>

<style lang="scss">
    .catalog {
        width: 100%;
        display: block;

        &-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

    }
</style>