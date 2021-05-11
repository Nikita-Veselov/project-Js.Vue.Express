<template>
<div>
  
  <headerElement />
  
  <transition name="fade">
  <div id="app">
    <router-view />
  </div>
  </transition>
  <footerElement />

</div>
</template>

<script>
import headerElement from './components/header.vue';
import footerElement from './components/footer.vue';

export default {
  components: {
    headerElement,
    footerElement
  }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #f16d7f;
        }
    }
}

</style>
