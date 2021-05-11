<template>
    <!--HEADER START-->
        <div class="container px-0 my-4">
            <div class="d-flex row px-0 mx-0 justify-content-center">
                <div class="logo d-flex ">
                    <a href="#" class="pr-2"><img src="../assets/imgs/logo.png" alt="logo"></a>
                    <a href="#" class="pr-3 pr-xl-3 pr-lg-0 pr-md-2 pr-sm-2 brand">bran<span>d</span></a>
                </div>

                <div class="d-flex align-items-center pl-4 pr-4">
                    <div class="dropdown">
                        <button class=" btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Browse
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <div class="dropdown-item">woman</div>
                            <a href="#" class="dropdown-item" type="button">Dresses</a>
                            <a href="#" class="dropdown-item" type="button">Tops</a>
                            <a href="#" class="dropdown-item" type="button">Sweaters/Knits</a>
                            <a href="#" class="dropdown-item" type="button">Jackets/Coats</a>
                            <a href="#" class="dropdown-item" type="button">Blazers</a>
                            <a href="#" class="dropdown-item" type="button">Denim</a>
                            <a href="#" class="dropdown-item" type="button">Leggings/Pants</a>
                            <a href="#" class="dropdown-item" type="button">Skirts/Shorts</a>
                            <a href="#" class="dropdown-item" type="button">Accessories</a>

                            <div class="dropdown-item">men</div>
                            <a href="#" class="dropdown-item" type="button">Tees/Tank tops</a>
                            <a href="#" class="dropdown-item" type="button">Shirts/Polos</a>
                            <a href="#" class="dropdown-item" type="button">Sweaters</a>
                            <a href="#" class="dropdown-item" type="button">Sweatshirts/Hoodies</a>
                            <a href="#" class="dropdown-item" type="button">Blazers</a>
                            <a href="#" class="dropdown-item" type="button">Jackets/vests</a>
                        </div>
                    </div>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for Item..." aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>

                <div class="headerAccountAndCart d-flex align-self-center justify-content-center">
                    <div class="headerCart pr-4" v-if="$route.name!='Basket'">
                        <button class="btn" @click="showBasket = !showBasket"><img src="../assets/imgs/cart.png">Cart</button>
            
                        <!--BASKET HERE-->
                        <basket v-show="showBasket" ref="bask" />
                    </div>

                    <div class="dropdown">
                        <button class="btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Account
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </div>

            </div>

            <div id="nav" class="nav row-cols-3 justify-content-center">
                <router-link to="/" class="col-3 m-1">Home</router-link>
                <router-link to="/catalog" class="col-3 m-1">Catalog</router-link>
                <router-link to="/basket" class="col-3 m-1">Basket</router-link>
            </div>
        </div>
</template>

<script>
import basket from '../components/basket.vue';
import { get } from '../utils/reqs.js';

export default {
    components: {
        basket
    },
    data() {
        return {
            showBasket: false,
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
    
</style>