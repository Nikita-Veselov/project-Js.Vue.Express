<template>
     
<div class="main">

    <div class="w-100 space"></div>
    <div class="w-100 space"></div>

    <!-- FORM TO INSERT URL -->
    <div class="col-lg-5 col-7">
        <label class="" for="url">Insert URL for shortening:</label>
        <div class="input-group">
            <input class="form-control" type="text" name="url" value="" placeholder="Put your URL here">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" value="Short Me">Create</button>
            </div>
        </div>
    </div>

    <div class="w-100 space"></div>

    <!-- RETURN CONVERTED URL--> 
    <div class="col-lg-4 col-6">
        <label for="url">Take your new URL here:</label>
        <div class="input-group">
            <input class="form-control" type="url" name="url" value="" readonly placeholder="Empty for now">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" value="copy">#</button>
            </div>
        </div>
    </div>

    
    <div class="w-100 space"></div>
    <div class="w-100 space"></div>

    
    <div class="title col-auto justify-content-center">About Us</div>
    <div class="w-100"></div>
    <div class="col-7 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Odit culpa maiores cumque accusantium natus consequatur, 
        iure necessitatibus eveniet quis fugiat minima dicta dolorem suscipit 
        similique officiis rerum in ut doloribus blanditiis voluptatem voluptate 
        ad nisi porro repellendus?
    </div>


    <div class="w-100 space"></div>
    
</div>
</template>

<script>
export default {

}
</script>

<style>
.space {
    margin: 1.5rem 0;
}

</style>