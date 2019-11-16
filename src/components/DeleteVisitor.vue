<template>
    <!-- delete a visitor -->
    <div id="overlay" v-if="displayDeleteOption">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text-center">Delete Visitor</h4>
                        <button type="button" class="close" @click="displayDeleteOption = false">X</button>
                    </div>
                    <div class="modal-body">   
                        <h4 class="text-center">You are about to delete!! </h4>
                        <h2 class="text-center">{{ selectedVisitor.name +" "+ selectedVisitor.surname }}</h2>
                        <hr>
                        <div class="group-form">
                            <button class="btn btn-danger btn-block btn-lg " @click="displayDeleteOption= false; deleteVisitor();">DELETE</button>
                        </div>    
                    </div>    
                </div>
            </div>
    </div>  
</template>

<script>
export default {
    name:'DeleteVisitor',

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