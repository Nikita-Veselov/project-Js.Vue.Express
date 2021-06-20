<template>
<div class="login">
    <div class="formDiv align-self-center">
        
        <div class="inputBox">
            <input type="text" name="login" onkeyup="this.setAttribute('value', this.value);" value="">
            <label for="login">Login</label>
        </div>

        <div class="inputBox">
            <input type="text" name="password" onkeyup="this.setAttribute('value', this.value);" value="">
            <label for="password">Password</label>
        </div> 

        <button class="btn btn-secondary" type="submit" name="user" value="Log Me">Login</button>
        
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.formDiv {
    width: 15rem;
    padding: 1.5rem;
    box-sizing: border-box;
    
}

.formTitle {
    color: rgb(26, 26, 26);
    margin: 0 0 0.5rem;
    padding: 0;
    text-align: center;
}

.formDiv .inputBox {
    position: relative;
}

.formDiv .inputBox input {
    width: 100%;
    padding: 0.0625rem 0;
    font-size: 1rem;
    color: rgb(26, 26, 26);
    letter-spacing: 0.062rem;
    margin-bottom: 1.875rem;
    border: none;
    border-bottom: 0.065rem solid rgb(26, 26, 26);
    outline: none;
    background: transparent;
}

.formDiv .inputBox label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1rem;
    color: rgb(26, 26, 26);
    pointer-events: none;
    transition: 0.5s;
}

.formDiv .inputBox input:focus ~ label,
.formDiv .inputBox input:not([value=""]) ~ label {
    top: -1.125rem;
    left: 0;
    color:rgb(0, 0, 0);
    font-size: 0.75rem;
}

.formDiv a {
    float: right;
}

.formDiv .message {
    text-align: center;
    color: rgba(200, 40, 40, 0.959);
}
</style>