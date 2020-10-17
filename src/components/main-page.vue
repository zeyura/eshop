<template>
    <div>
        <h3 class="page-title">Online Shop</h3>
        <p style="padding-top: 20px">
            <router-link tag="a" :to="{name: 'catalog'}" >TO CATALOG...</router-link>
        </p>

        <div class="site-construct">
            <img src="../assets/images/sitebuildbl.png" alt="logo" class="logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: "main-page"
    }
</script>

<style scoped>
    .site-construct { opacity: .36; padding-top: 30px  }

    @media (min-width: 640px) {
        .page-title {
            display: none!important;
        }
    }

</style>