<template>
  <div id="app">
    <main-wrapper />
  </div>
</template>

<script>
    import mainWrapper from '@/components/main-wrapper'

    export default {
        name: "app",
        components: {
            mainWrapper
        },
        data: () => ({

        }),

    }
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
