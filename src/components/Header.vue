<template>
    <div>   
        <!-- App top -->
        <div class="container-fluid">
            <div class="row bg-dark">
                <div class="col-lg-12">
                    <p class="text-center text-light display-4 pt-3" style="font-size:35px">Visitor Registry</p>
                </div>
            </div>
        </div>
        <!-- Header with button to add new visitor -->
        <div class="container">
            <div class="row mt-2">
                <div class="col-lg-6">
                    <button class="btn btn-success" @click ='openAddOption();'>
                        Add New Visitor
                    </button>
                </div>
               <div class="col-lg-6">
                    <button type="button" class="btn btn-outline-warning float-right" @click ='toggle();'>
                        Adm
                    </button>
                </div>
            </div>
         <hr class="bg-info">
            <!-- Success and Error msg display ,hidden by default / not working*-->
            <div class="alert alert-danger" v-if="errorMsg"> {{ errorMsg }} </div>
            <div class="alert alert-success" v-if="successMsg"> {{ successMsg }} </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'Header',
    data:function(){
        return{
            errorMsg:"error test!",
            successMsg:"success test!"
        };
    },
    
    methods:{
        toggle(){
            this.adm = !this.adm;
            this.$emit('adminActive',this.adm);
        },
        openAddOption(){
            this.displayAddOption = !this.displayAddOption ;
            this.$emit('addOptionActive',this.displayAddOption);
        },
    },
}   
</script>
