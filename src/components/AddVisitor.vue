<template>
  <!-- Add New Visitor -->
    <div id="overlay" v-if="displayAddOption">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header ">
                    <h4 class="modal-title ">New Visitor</h4>
                    <button type="button" class="close" @click="displayAddOption = false"> X </button>
                </div>
                <div class="modal-body p-4">
                   <form action="#" method="post" enctype="multipart/form-data">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control form-control-lg" placeholder="Name" v-model="newVisitor.name">
                        </div>
                        <div class="form-group">
                            <input type="text" name="surname" class="form-control form-control-lg" placeholder="Surname" v-model="newVisitor.surname">
                        </div>
                        <div class="form-group">
                            <input type="text" name="phone" class="form-control form-control-lg" placeholder="Phone" v-model="newVisitor.phone">
                        </div>
                        <div class="from-group">
                            <input type="text" name="email" class="form-control form-control-lg" placeholder="E-mail"  v-model="newVisitor.email">
                        </div>
                        <hr>
                        <div class="from-group">
                            <label>Select Image </label>
                            <input type="file" name="image" @change="onFileSelected" >
                        </div>
                        <hr>
                        <div class="form-group">      
                            <button type="submit" class="btn btn-success btn-block btn-lg " @click="displayAddOption = false, addVisitor();" >Add Visitor</button>
                        </div>
                    </form>
                </div>           
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AddVisitor',

}
</script>

<style>
    #overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.6);
    }
</style>