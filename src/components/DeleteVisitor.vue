<template>
    <!-- delete a visitor -->
    <div id="overlay" v-if="isVisible">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title text-center">Delete Visitor</h4>
                    <button type="button" class="close" @click="isVisible = false;">X</button>
                </div>
                <div class="modal-body">
                    <h4 class="text-center">You are about to delete!! </h4>
                    <h2 class="text-center">{{ selectedVisitor.name +" "+ selectedVisitor.surname }}</h2>
                    <hr>
                    <div class="group-form">
                        <button class="btn btn-danger btn-block btn-lg " @click="deleteVisitor()">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import EventBus from "../EventBus";

    export default {
        name: 'DeleteVisitor',
        data: function () {
            return {
                isVisible: false,
                selectedVisitor: {},
            }
        },
        mounted() {
            EventBus.$on("DeleteVisitor", (visitor) => {
                this.selectedVisitor = visitor;
                this.isVisible = true;
            });
        },
        methods: {
            toFormData(obj) {
                let formData = new FormData();
                for (var i in obj) {
                    formData.append(i, obj[i])
                }
                return formData;
            },
            deleteVisitor() {
                let formData = this.toFormData(this.selectedVisitor);
                axios.post("/deleteVisitor.php?action=delete", formData).then((response) => {
                    if (response.status === 202){
                        EventBus.$emit("SetSuccessMessage", `${this.selectedVisitor.name} has been deleted`);
                        EventBus.$emit("RefreshVisitorList");   
                    }
                    this.isVisible = false;
                }).catch(err => {
                    EventBus.$emit("SetErrorMessage", `Failed to modify ${this.selectedVisitor.name}, ${err}`);
                    this.isVisible = false;
                });
            },
        },
    }
</script>

<style scoped>
    #overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
    }
</style>