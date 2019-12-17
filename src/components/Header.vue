<template>
    <div>
        <!-- App top -->
        <div class="container-fluid p-0 m-0">
            <h3 class="bg-dark text-left text-light p-2">Visitor Registry</h3>
        </div>
        <!-- Header with button to add new visitor -->
        <div class="container">
            <div class="row mt-2">
                <div class="col-lg-6">
                    <button class="btn btn-success" @click='openAddVisitorDialog();'>
                        Add New Visitor
                    </button>
                </div>
                <div class="col-lg-6">
                    <button type="button" class="btn btn-outline-warning float-right" @click='toggle();'>
                        Admin
                    </button>
                </div>
            </div>
            <hr class="bg-info">
            <!-- Success and Error msg display ,hidden by default / not working*-->
            <div class="alert alert-danger" v-if="errorMessageVisible"> {{ errorMsg }} </div>
            <div class="alert alert-success" v-if="successMessageVisible"> {{ successMsg }} </div>
        </div>
    </div>
</template>

<script>
    import EventBus from "../EventBus";
    export default {
        name: 'Header',
        data: () => ({
            errorMsg: "",
            successMsg: "",
            errorMessageVisible: false,
            successMessageVisible: false,
            isAdmin: false
        }),
        mounted() {
            EventBus.$on("SetSuccessMessage", (message) => {
                this.successMsg = message;
                this.successMessageVisible = true;

                setTimeout(() => {
                    this.successMessageVisible = false;
                }, 5000);
            });
            // SetErrorMessage
            EventBus.$on("SetErrorMessage", (message) => {
                this.errorMsg = message;
                this.errorMessageVisible = true;

                setTimeout(() => {
                    this.errorMessageVisible = false;
                }, 5000);
            });
        },
        methods: {
            toggle() {
                this.isAdmin = !this.isAdmin;
                EventBus.$emit('adminStateChanged', this.isAdmin);
            },
            openAddVisitorDialog() {
                EventBus.$emit("showAddVisitorDialog");
            },
        },
    }
</script>