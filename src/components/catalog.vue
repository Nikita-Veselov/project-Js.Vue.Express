<template>
    <div class="d-flex row ml-3 mr-3 justify-content-center">
      <!-- HERE WILL RENDER CATALOG COMPONENTS FROM API  -->
        <item class="itemContainer m-2 xs-col-12 sm-col-6 md-col-4 lg-col-3"
        v-for="item of items" 
        type="catalog"
          :key="item.productId"
          :item="item"
        />
    </div>
</template>

<script>
import item from '../components/item.vue';

import { get } from '../utils/reqs.js';

export default {
    components: {
        item
    },
    data() {
        return {
            // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            url: '/api/catalog',
            items: []
        }
    },
    methods: {
        
    },
    mounted() {
        get(this.url)
        .then(d => { this.items = d })
    }
}
</script>

<style>
 .itemContainer {
    width: 15em;
 }
</style>