<template>
    <div class="user-profile">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <div class="container">
                <b-navbar-brand class="text-uppercase mr-auto">User Profile</b-navbar-brand>
                <!-- Route link to go back to user list -->
                <router-link :to="{ path: '/'}"><b-button variant="success">Go back</b-button></router-link>
            </div>
        </b-navbar>

        <!-- User details -->
        <div class="user-details container mt-4">
            <div v-for="(user, id) in users" :key="id">
                <div class="user-title"><strong>User Title: </strong>{{ user.jobTitle }}</div>
                <p class=""><strong>Street:</strong>  {{ user.fullName }}</p>
                <p class=""><strong>Zip Code:</strong>  {{ user.email }}</p>
                <p class=""><strong>City:</strong>  {{ user.phoneNumber }}</p>
                <p class=""><strong>State:</strong> {{ user.address }}</p>
            </div>
        </div>
    </div>
</template>

<script>
// imports axios
import axios from 'axios'
// imports user.json file
import users from './../assets/users.json'

export default {
    name: 'UserProfile',
    data(){
        return {
           users: users,
        }
    },
    // life cycle hook
    created(){
        this.getUser(this.$route.id)
    },
}
</script>

<style scoped lang="scss">

</style>


