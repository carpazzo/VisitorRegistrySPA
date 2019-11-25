<template>
    <!-- Cards Display -->
        <div class="row">
            <div class="container">
                <!-- Iterate using vue directive to display data --> 
                <div class="card-columns">
                    <div class="card bg-dark" style="width: 16rem;" v-bind:key="visitor.id" v-for="visitor in visitors">
                        <img v-bind:src="'data:image/jpge;base64,'+ visitor.image " class="card-img-top" alt="Card Image">
                       <div class="card-body text-light">
                            <h5 class="card-title text-center text-capitalize">{{ visitor.name }} {{ visitor.surname }}</h5>
                            <p class="card-text ">Phone: {{ visitor.phone }}</p>
                            <p class="card-text  text-lowercase">Email: {{ visitor.email }}</p>
                        </div>
                        
                        <div class="card-footer text-center" v-show ="adm">
                            <a href="#" @click ="openEditOption(); selectedToChange(visitor);" class="btn btn-warning ">Edit</a>
                            <a href="#" @click ="openDeleteOption(); selectedToChange(visitor);" class="btn btn-danger ">Delete</a>
                        </div>
  
                    </div>
                </div>
            </div>
            
        </div>
        
</template>

<script>
export default {
    name:'DisplayVisitor',
    props:{
        visitors:{type:Array},
        adm:Boolean,

    },

    data:function(){
        return{
            displayEditOption: false,
            displayDeleteOption: false,
            selectedVisitor:{},
        };
    },
    methods:{
        selectedToChange(visitor){
        this.selectedVisitor = visitor;
        },
        openEditOption(){
            this.displayEditOption = true;
            this.$emit('editActive',this.displayEditOption);
        },
        openDeleteOption(){
            this.displayDeleteOption = true;
            this.$emit('deleteActive',this.displayDeleteOption);
        },
        
    }

}
</script>

<style scoped>

.card-columns {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
} 
  
</style>