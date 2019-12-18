<template>
    <!-- Update a Visitor profile -->
    <div id="overlay" v-if="isVisible">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Change Visitor Info</h4>
                    <button type="button" class="close" @click="isVisible = false;">X</button>
                </div>
                <div class="modal-body p-4">
                    <form novalidate enctype="multipart/form-data">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control form-control-lg"
                                v-model="selectedVisitor.name">
                        </div>
                        <div class="form-group">
                            <input type="text" name="surname" class="form-control form-control-lg"
                                v-model="selectedVisitor.surname">
                        </div>
                        <div class="form-group">
                            <input type="text" name="phone" class="form-control form-control-lg"
                                v-model="selectedVisitor.phone">
                        </div>
                        <div class="form-group">
                            <input type="text" name="email" class="form-control form-control-lg"
                                v-model="selectedVisitor.email">
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>Select Image</label>
                            <input type="file" name="image" @change="onFileSelected">
                        </div>
                        <hr>
                        <div class="form-group">
                            <button type="button" name="update" class="btn btn-warning btn-block btn-lg"
                                @click="updateVisitor()">EDIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import EventBus from "../EventBus";

    export default {
        name: 'EditVisitor',
        data: function () {
            return {
                isVisible: false,
                selectedVisitor: {},
                selectedFile: null,
            }
        },
        mounted() {
            EventBus.$on("EditVisitor", (visitor) => {
                this.selectedVisitor = visitor;
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
            updateVisitor() {
                let formData = this.toFormData(this.selectedVisitor);
                if (this.selectedFile){
                    formData.append('image', this.selectedFile);
                }
                axios.post("/updateVisitor.php?action=update", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {
                    if (response.status === 200){
                        EventBus.$emit("SetSuccessMessage", `${this.selectedVisitor.name} has been modified`);
                        EventBus.$emit("RefreshVisitorList");   
                    }
                    this.isVisible = false;
                }).catch(err => {
                    EventBus.$emit("SetErrorMessage", `Failed to modify ${this.selectedVisitor.name}, ${err}`);
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