<template>
<div>

    <div class="container">
        <div class="productDetailsTitles d-flex col">
            <div class="col-3">Preview</div>
            <div class="col-2">Name</div>
            <div class="col-2">Price</div>
            <div class="col-2">Quantity</div>
            <div class="col-3">Action</div>
        </div>

        <!-- PROB PUT BAKET ITEMS HERE AND STYLE TO FIT COLUMNS -->
        <template v-if="this.items.length == 0">
            <div class="empty-basket d-flex">
                <div class="row col-12 justify-content-center align-content-center">
                    Your basket is empty!
                </div>  
            </div>
        </template>

        <template v-else>
            <div class="flex-column" >
                <item 
                    class="col-12"
                    v-for="item of items" 
                    type="basket-checkout" 
                        :item="item" 
                        :key="item.productId"
                    @remove="remove"
                    @add="add"
                />
            </div>
        </template>

        <div class="container d-flex mt-3 justify-content-end">
            <div class="grandTotal col-3">grand total <span class="col justify-self-center">&#36; {{ countTotal() }} </span></div>
        </div>

        <div class="productDetailsButtons container d-flex justify-content-between">
            <button class="col-3">cLEAR SHOPPING CART</button>
            <button class="col-3">cONTINUE sHOPPING</button>
            <div class="proceedToCheckout col-3">
                <button class="">proceed to checkout</button>
            </div>
           
        </div>
    </div>
</div>
    
</template>

<script>
import item from '../components/item.vue';

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
        }
    }
    
}
</script>

<style>
.empty-basket {
    height: 25rem;
    font-style: italic;
    font-size: 1.5rem;
}
.feturedItemPrice {
        padding: 0 !important;
   }
   .feturedItemAmount {
        font-size: 16px;
        font-weight: bold;
        line-height: 26px; 
   }
   .basketItemDetails {
        border: 1px solid #ef5b70;
        color: #df6275c9;
        font-size: 16px;
        font-weight: bold;
        line-height: 26px; 
   }
   .basketItemDelete{
        border-radius: 3px;
        border: 1px solid black;
        background-color: #ffffff;
        color: #df0d29da;
        font-size: 16px;
        font-weight: bold;
        line-height: 26px;
   }
   .basketItemAdd {
        border-radius: 3px;
        border: 1px solid #ee3a55;
        background-color: #ffe7e9;
        color: #df0d29da;
        font-size: 16px;
        font-weight: bold;
        line-height: 26px;
   }
   
   
</style>