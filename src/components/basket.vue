<template>
<transition name="fade">

<div class="headerCartWrap">
    <div class="headerCartWrapBlock"></div>
    <div class="headerCartWrapInAll flex-column">
        <div id="basket" class="headerCartBasket" >
            <!--BASKET ITEMS-->
            <div v-if="items.length==0" class="mb-3 col-12 justify-self-center">Your basket is empty!</div>
            <item v-for="item of items" type="basket" :item="item" :key="item.productId" @remove="remove" />
        </div>
        <div class="headerCartWrapTotalPrice flex-column">
            <div class="col-12">Total: {{ countTotal() }}$</div>
            
            <router-link to="/basket" class="btn col-12">Go To Basket</router-link>               
        </div>
    </div>
</div>    
</transition>

</template>

<script>
import item from './item.vue';
import {
    get,
    put,
    del,
    post
} from '../utils/reqs.js';

export default {
    components: {
        item
    },
    data() {
        return {
            url: '/api/basket',
            items: []
        }
    },
    mounted() {
        get(this.url)
            .then(basket => {
                this.items = basket.content
            });
    },    
    methods: {
        countTotal() {
            let totalPrice = 0
            let totalAmount = 0
            this.items.forEach(el => {
                totalAmount += el.amount
                totalPrice += (el.productPrice * el.amount)
            });

            return totalPrice
        },
        add(item) {
            let find = this.items.find(el => el.productId == item.productId);
        
            if (!find) {
                let newItem = Object.assign({}, item, {
                    amount: 1
                });
                post(this.url, newItem)
                    .then(res => {
                        if (res.status) {
                            this.items.push(newItem)
                        } else {
                            console.log('Server err')
                        }
                    })
            } else {
                put(`${this.url}/${item.productId}`, 1)
                    .then(res => {
                        if (res.status) {
                            find.amount++
                        } else {
                            console.log('Server err')
                        }
                    })
            }
        },
        remove(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find.amount > 1) {
                put(`${this.url}/${item.productId}`, -1)
                    .then(res => {
                        if (res.status) {
                            find.amount--
                        } else {
                            console.log('Server err')
                        }
                    })
            } else {
                del(`${this.url}/${item.productId}`)
                    .then(res => {
                        if (res.status) {
                            this.items.splice(this.items.indexOf(find), 1);
                        } else {
                            console.log('Server err')
                        }
                    })
            }
        },
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}  
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
