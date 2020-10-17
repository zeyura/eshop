<template>
  <div id="app">
    <main-wrapper />
  </div>
</template>

<script>
    import mainWrapper from '@/components/main-wrapper'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "app",
        components: {
            mainWrapper
        },
        data: () => ({

        }),

        computed: {
            ...mapGetters([
                'isMobile',
                'isDesktop'
            ])
        },
        methods: {
            ...mapActions([
                'setMobile',
                'setDesktop'
            ])
        },
        mounted() {
            if(window.innerWidth > 767) { // set desktop
                this.setDesktop()
            } else { // set mobile
                this.setMobile()
            }

            let ths = this;
            window.addEventListener('resize', function () {
               if(window.innerWidth > 767) {
                   ths.setDesktop()
               } else {
                   ths.setMobile()
               }
            });
        }

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
///

img {
  max-width: 100%;
  max-height: 100%;
}

.btn {
  border-radius: $radius - 2px;
  color: #444;
}

@media (min-width: 480px) and (max-width: 600px) {
  .row .col.s12 {
    width: 50%;
  }
}

@media (min-width:1201px) {
  .btn,.btn-large,.btn-small,.btn-floating,.btn-large,.btn-small,.btn-flat {
    font-size: 14px;
  }
}

</style>
