<template>

<div class="header">
        
    <div class="col-auto title mx-auto">|logo| Wann.fun</div>

    <!-- ACCOUNT CONTROLL BUTTONS -->
    <div class="header-buttons col-auto mx-auto">
        <div class="row justify-content-center">
            <div class="col-auto p-0" v-if="$route.name!='Main'">
                <router-link class="routerButton" to="/">
                    <button class="btn btn-outline-secondary">Home</button>
                </router-link>
            </div>

            <div class="col-auto p-0" v-if="$route.name!='Profile'">
                <router-link class="routerButton" to="profile">
                    <button class="btn btn-outline-secondary">Profile</button>
                </router-link>
            </div>

            <div class="col-auto p-0" v-if="$route.name!='Login'"> 
                <router-link class="" to="login">
                    <button class="btn btn-outline-secondary">Login</button>
                </router-link>
            </div>
        </div>
    </div>

</div>

</template>

<script>
export default {

}
</script>

<style>

.title {
   font-weight: bold; 
   font-size: 1.5rem;
}
.header {
    background-color: azure;
}

.routerButton {
    text-decoration: none;
    color: black;
}

.routerButton:hover {
    text-decoration: none;
    color:blanchedalmond
}

</style>