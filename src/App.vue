<template>
<div class="container-fluid min-vh-100 d-flex flex-column">

    <headerComponent class="row px-5" />
    
    <router-view class="row justify-content-center flex-grow-1"/>
     
    <footerComponent class="row px-5 justify-content-center " />

</div>
</template>

<script>
import headerComponent from './components/header.vue';
import footerComponent from './components/footer.vue';

export default {
    components: {
        headerComponent,
        footerComponent
    }
}
</script>

<style>

</style>