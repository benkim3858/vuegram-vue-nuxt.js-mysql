<template>
    <div class="back_ground">
        <header>
        </header>
      <Nuxt /> 
      <footer></footer>
    </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" scope>
.back_ground{
    height: 100vh;
    overflow: hidden;
    margin:0;
    /* background-image: url("./assets/background.jpg"); */
    background-color: 	#F8F8FF;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
