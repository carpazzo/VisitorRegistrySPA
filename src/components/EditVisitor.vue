<template>
    <!-- Update a Visitor profile -->
    <div id="overlay" v-if="displayEditOption">
    
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Change Visitor Info</h4>
                    <button type="button" class="close" @click="displayEditOption = false">X</button>
                </div>
                <div class="modal-body p-4">
                    <form action="#" method="post" enctype="multipart/form-data">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control form-control-lg" v-model="selectedVisitor.name">
                        </div>
                        <div class="form-group">
                            <input type="text" name="surname" class="form-control form-control-lg" v-model="selectedVisitor.surname">
                        </div>
                        <div class="form-group">
                            <input type="text" name="phone" class="form-control form-control-lg" v-model="selectedVisitor.phone">
                        </div>
                        <div class="form-group">
                            <input type="text" name="email" class="form-control form-control-lg" v-model="selectedVisitor.email">    
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>Select Image</label>
                            <input type="file" name="image" @change="onFileSelected">
                        </div>
                        <hr>
                        <div class="form-group">
                                <button type="submit" value="submit" name="update" class="btn btn-warning btn-block btn-lg" @click="displayEditOption= false, updateVisitor();">EDIT</button>
                        </div>
                    </form>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'EditVisitor',
    props:{
        displayEditOption: Boolean,
    },
    data:function(){
        return{
            selectedVisitor:{} ,
            selectedFile: null ,  
        }
    },
    methods:{
        
      onFileSelected(event){
      this.selectedFile = event.target.files[0];
      },
      selectedToChange(visitor){
      this.selectedVisitor = visitor;
      },


    }
 
}

</script>

<style scoped>
    #overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.6);
    }
</style>