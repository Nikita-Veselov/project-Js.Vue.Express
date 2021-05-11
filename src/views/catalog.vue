<template>
  <div>
    
    <div class="d-flex sortingForm col-sm-2 col-12 justify-content-center flex-column">
        <div>
            <div>
                <div>
                    <!-- Sort By -->
                    <div class="sortBy d-flex flex-column">
                        <div class="productFeaturesTitle mb-3">Sort</div>
                        <form class="form-group d-flex">
                            <label class="form-control">Sort By</label>
                            <select class="form-control">
                                <option selected>Name</option>
                                <option value="1">Price</option>
                            </select>
                        </form>
                        <form class="form-group d-flex">
                            <label class="form-control">Show</label>
                            <select class="form-control">
                                <option>09</option>
                                <option>18</option>
                                <option>36</option>
                                <option selected>All</option>
                            </select>
                        </form>
                    </div>
                    <!-- Size -->
                    <div class="mb-3 ">
                        <div class="productFeaturesTitle justify-content-center mb-3">Size</div>
                        <form class="productSizes col-sm col-12">
                    
                                <div class="productFeatures input-group">
                                    <input type="checkbox" name="xs">
                                    <label for="xs">xs</label>
                                </div>
                                <div class="productFeatures input-group">
                                    <input type="checkbox" name="s">
                                    <label for="s">s</label>
                                </div>
                                <div class="productFeatures input-group">
                                    <input type="checkbox" name="m">
                                    <label for="m">m</label>
                                </div>
                                <div class="productFeatures input-group">
                                    <input type="checkbox" name="l">
                                    <label for="l">L</label>
                                </div>
                                <div class="productFeatures input-group">
                                    <input type="checkbox" name="xl">
                                    <label for="xl">xl</label>
                                </div>
                                <div class="productFeatures input-group">
                                    <input type="checkbox" name="xxl">
                                    <label for="xxl">xxl</label>
                                </div>
                             
                        </form>
                    </div>
                    <!-- Price -->
                    <div>
                        <form>
                            <div class="form-group productFeaturesTitle mb-0">
                                <label for="formControlRange">Price</label>
                                <input type="range" class="form-control-range" id="formControlRange">
                            </div>
                        </form>
                        <div class="productFeatures d-flex justify-content-between">
                            <div class="">&#36;52</div>
                            <div class="">&#36;400</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Category, Brand -->
            <div>
                <details>
                    <summary class="d-flex justify-content-between align-items-center py-2 pl-2">
                        <span>Category</span>
                        <i class="fas fa-caret-down"></i>
                        <i class="fas fa-caret-up"></i>
                    </summary>
                    <div class="d-flex flex-column">
                        <a href="#">Accessories</a>
                        <a href="#">Bags</a>
                        <a href="#">Denim</a>
                        <a href="#">Hoodies &amp; Sweatshirts</a>
                        <a href="#">Jackets &amp; Coats</a>
                        <a href="#">Pants</a>
                        <a href="#">Polos</a>
                        <a href="#">Shirts</a>
                        <a href="#">Shoes</a>
                        <a href="#">Shorts</a>
                        <a href="#">Sweaters &amp; Knits</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Tanks</a>
                    </div>
                </details>

                <details >
                    <summary class="d-flex justify-content-between align-items-center py-2 pl-2">
                        <span>Brand</span>
                        <i class="fas fa-caret-down"></i>
                        <i class="fas fa-caret-up"></i>
                    </summary>
                    <div class="d-flex flex-column">
                        <a href="#">Accessories</a>
                        <a href="#">Bags</a>
                        <a href="#">Denim</a>
                        <a href="#">Hoodies &amp; Sweatshirts</a>
                        <a href="#">Jackets &amp; Coats</a>
                        <a href="#">Pants</a>
                        <a href="#">Polos</a>
                        <a href="#">Shirts</a>
                        <a href="#">Shoes</a>
                        <a href="#">Shorts</a>
                        <a href="#">Sweaters &amp; Knits</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Tanks</a>
                    </div>
                </details>
            </div>
        </div>
    </div>
    <template v-if="this.items.length == 0">
            <div class="empty-catalog d-flex">
                <div class="row col-12 justify-content-center align-content-center">
                    Can't load catalog, something wrong on server!
                </div>  
            </div>
    </template>

    <catalog v-else @add="addItem" />

  </div>
</template>
 
<script>

import catalog from '../components/catalog.vue';

import { get } from '../utils/reqs.js';

export default {
    components: {
        catalog
    },
    data() {
        return {
            // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            url: '/api/catalog',
            items: []
        }
    },
    methods: {
        parentGet(url) {
            return fetch(url).then(d => d.json())
        },
        addItem(item) {
            let header = this.$parent.$children.find(child => {return child.$options._componentTag === "headerElement" ;});
            header.$refs.bask.add(item);
        }
    },
    mounted() {
        get(this.url)
        .then(d => { this.items = d })
    }
}
</script>

<style>
.sortingForm {
    float: left;
}
@media (max-width: 576px) {
    .sortingForm{
        float:none;
    }
    .sortBy {
        flex-direction: row;
    }
}
.empty-catalog {
    height: 30rem;
    font-style: italic;
    font-size: 1.5rem;
}
@media (max-width: 1400px) {
        .sortBy form{
            flex-direction: column;
        }  
        .sortBy form label{
            background: #8383832c;
        }   
   }
</style>