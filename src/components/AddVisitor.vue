<template>
    <!-- Add New Visitor -->
    <div id="overlay" v-if="isVisible">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header ">
                    <h4 class="modal-title ">New Visitor</h4>
                    <button type="button" class="close" @click="isVisible = false;">X</button>
                </div>
                <div class="modal-body p-4">
                    <form novalidate enctype="multipart/form-data">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control form-control-lg" placeholder="Name"
                                v-model="newVisitor.name">
                        </div>
                        <div class="form-group">
                            <input type="text" name="surname" class="form-control form-control-lg" placeholder="Surname"
                                v-model="newVisitor.surname">
                        </div>
                        <div class="form-group">
                            <input type="text" name="phone" class="form-control form-control-lg" placeholder="Phone"
                                v-model="newVisitor.phone">
                        </div>
                        <div class="from-group">
                            <input type="text" name="email" class="form-control form-control-lg" placeholder="E-mail"
                                v-model="newVisitor.email">
                        </div>
                        <hr>
                        <div class="from-group">
                            <label>Select Image </label>
                            <input type="file" name="image" @change="onFileSelected">
                        </div>
                        <hr>
                        <div class="form-group">
                            <button type="button" name="create" class="btn btn-success btn-block btn-lg "
                                @click="addVisitor()">Add Visitor</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import EventBus from "../EventBus";

    export default {
        name: 'AddVisitor',
        data: function () {
            return {
                isVisible: false,
                newVisitor: {
                    name: "",
                    surname: "",
                    phone: "",
                    email: "",
                },
                selectedFile: null
            }
        },
        mounted() {
            EventBus.$on("showAddVisitorDialog", () => {
                this.isVisible = true;
            });
        },
        methods: {
            onFileSelected(event) {
                this.selectedFile = event.target.files[0];
            },
            toFormData(obj) {
                let formData = new FormData();
                for (var i in obj) {
                    formData.append(i, obj[i])
                }
                return formData;
            },
            addVisitor() {
                let formData = this.toFormData(this.newVisitor);
                formData.append('image', this.selectedFile, this.selectedFile.name);
                axios.post("/createVisitor.php?action=create", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {
                    this.newVisitor = {
                        name: "",
                        surname: "",
                        phone: "",
                        email: "",
                        image: ""
                    };
                    if (response.status === 201){
                        EventBus.$emit("SetSuccessMessage", "New visitor has been added!");
                        EventBus.$emit("RefreshVisitorList");   
                    }
                    this.isVisible = false;
                }).catch(err => {
                    EventBus.$emit("SetErrorMessage", "Failed to add a new visitor, error: "+err);
                    this.isVisible = false;
                });
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
        background: rgba(0, 0, 0, 0.6);
    }
</style>