<template>
    <!-- Table description -->
        <div class="row">
            <div class="container-fluid">
                <!-- Iterate using vue directive to display data --> 
                <div class="card-columns">
                    <div class="card bg-dark" style="width: 16rem;" v-bind:key="visitor" v-for="visitor in visitors">
                        <!-- to use the image tag here meanwhile ill be leaving an example -->
                        <img src="./images/companycard.jpg" class="card-img-top" alt="image">

                        <!-- <img v-bind:src="'data:image/jpge;base64,'"  class="card-img-top" alt="Card Image" > -->
                        <!-- <img v-bind:src="'data:image/jpge;base64,${visitor.image}'" class="card-img-top" alt="Card Image" > -->
                        <!-- <img src="data:image/jpeg;base64,'.base64_encode({{ visitor.image }})'"/> -->
                        <!-- <img src="data:image/jpeg;base64,'.base64_encode( $result[{{ visitor.image }}] ).'"/> -->
                        <!-- <img src="data:image/jpge;base64",.base64_encode{{ visitor.image }} > -->
                        
                        <p>{{ visitor.image }}</p>
                        <div class="card-body text-light">
                            <h5 class="card-title text-center text-capitalize">{{ visitor.name }} {{ visitor.surname }}</h5>
                            <p class="card-text ">Phone: {{ visitor.phone }}</p>
                            <p class="card-text  text-lowercase">Email: {{ visitor.email }}</p>
                        </div>
                        
                        <div class="card-footer text-center" v-show="adm">
                            <a href="#" @click = "displayEditOption = true; selectedToChange(visitor);" class="btn btn-warning ">Edit</a>
                            <a href="#" @click = "displayDeleteOption = true; selectedToChange(visitor);" class="btn btn-danger ">Delete</a>
                        </div>
  
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'DisplayVisitor',
   
}
</script>

<style>

.card-columns {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
} 
  
</style>