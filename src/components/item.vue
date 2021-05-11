<template>
  <div>
    <template v-if="type == 'catalog'">
        <div class="feturedItem">
            <div class="feturedImgWrap">
                <div class="feturedBuy">
                    <button class="add" @click="$parent.$emit('add', item)">
                        <div class="add">
                        <i class="add fas fa-shopping-cart"></i>Add to Cart</div>
                    </button>
                </div>
                <img class="feturedProduct" :src="item.productImg" alt="product">
            </div>
            <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center m-1">
                <div class="feturedItemName align-self-center">{{item.productName}}</div>
                <div class="feturedItemPrice align-self-center">${{item.productPrice}}</div>
            </div>
        </div>
    </template>

    <template v-if="type == 'basket'">
        <div class="d-flex headerCartWrapIn col-12">
            <a href="#" class="d-flex">
                <img :src="item.productImg" alt="product">
                <div>
                    <div>{{ item.productName }}</div>
                    <div class="headerCartWrapPrice">
                        {{ item.amount }} 
                        <span>x</span> 
                        ${{ item.productPrice }}
                    </div>
                </div>
            </a>
            <button class="btn fas fa-times-circle" @click="$emit('remove', item)"></button>
        </div>
    </template>

    <template v-if="type == 'basket-checkout'">
        <div class="feturedItem d-flex mt-2 mb-1">
            <div class="feturedImgWrap col-3 h-100">
                <img class="feturedProduct" :src="item.productImg" alt="product">
            </div>
            <div class="feturedItemName col-2 align-self-center">{{item.productName}}</div>
            <div class="feturedItemPrice col-2 align-self-center">${{item.productPrice}}</div>
            <div class="feturedItemAmount col-2 align-self-center">x{{item.amount}}</div>
            <div class="btn-block col-3 align-self-center basketButtons">
                <button class="btn m-1 col-6 basketItemAdd" @click="$emit('add', item)">Increase</button>
                <button class="btn m-1 col-6 basketItemDetails">Details</button>
                <button class="btn m-1 col-6 basketItemDelete" v-if="this.item.amount>1" @click="$emit('remove', item)">Decrease</button>
                <button class="btn m-1 col-6 basketItemDelete" v-else @click="$emit('remove', item)">Delete</button>
            </div>
        </div>
    </template>

  </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'catalog'
        },
        item: { type: Object }
    }
}
</script>

<style>
    @media (max-width: 992px) {
        .basketButtons button{
            max-width: 25em;
            font-size: 16px;
            overflow: hidden;
            white-space: nowrap;  
        }
    }
    @media (max-width: 768px) {
        .basketButtons button{
            max-width: 24em;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap; 
        }
    }
    @media (max-width: 576px) {
        .basketButtons button{
            max-width: 20em;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
        }
    }
</style>