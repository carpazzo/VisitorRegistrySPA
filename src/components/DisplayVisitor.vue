<template>
    <!-- Cards Display -->
    <div class="row m-0 p-0">
        <div class="container">
            <!-- Iterate using vue directive to display data -->
            <div class="card-columns" v-if="visitors.length > 0">
                <div class="card bg-dark" style="width: 16rem;" v-bind:key="visitor.id" v-for="visitor in visitors">
                    <img v-bind:src="'data:image/jpeg;base64,'+ visitor.image" class="card-img-top" alt="Card Image">
                    <div class="card-body text-light">
                        <h5 class="card-title text-center text-capitalize">{{ visitor.name }} {{ visitor.surname }}</h5>
                        <p class="card-text ">Phone: {{ visitor.phone }}</p>
                        <p class="card-text  text-lowercase">Email: {{ visitor.email }}</p>
                    </div>

                    <div class="card-footer text-center" v-show="isAdmin">
                        <a href="#" @click="showEditVisitorDialog(visitor)"
                            class="btn btn-warning ">Edit</a>
                        <a href="#" @click="showDeleteVisitorDialog(visitor)"
                            class="btn btn-danger ">Delete</a>
                    </div>

                </div>
            </div>
            <div v-else class="alert alert-info">No visitors, go ahead and add one!</div>
        </div>

    </div>

</template>

<script>
    import axios from 'axios';
    import EventBus from "../EventBus";

    export default {
        name: 'DisplayVisitor',
        data: () => ({
            displayEditOption: false,
            displayDeleteOption: false,
            selectedVisitor: {},
            visitors: [],
            errorMsg: "",
            isAdmin: false,
        }),

        mounted() {
            this.getAllVisitors();
            EventBus.$on("adminStateChanged", (isAdmin) => {
                this.isAdmin = isAdmin;
            });
            EventBus.$on("RefreshVisitorList", () => {
                this.getAllVisitors();
            });
        },
        methods: {
            showEditVisitorDialog(visitor){
                EventBus.$emit("EditVisitor", visitor);
            },
            showDeleteVisitorDialog(visitor) {
                EventBus.$emit("DeleteVisitor", visitor);
            },
            getAllVisitors() {
                axios.get("/displayAllVisitors.php?action=read")
                .then((response) => {
                    if (response.data.error) {
                        this.errorMsg = response.data.message;
                    } else {
                        this.visitors = response.data.visitors;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .card-columns {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>