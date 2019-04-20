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
            <div class="user-title"><strong>User Title: </strong>{{ users.title }}</div>
            <img :src="users.images[0]" alt="" width="300" class="border my-3">
            <p class=""><strong>Street:</strong>  {{ users.address.street }}</p>
            <p class=""><strong>Zip Code:</strong>  {{ users.address.zipCode }}</p>
            <p class=""><strong>City:</strong>  {{ users.address.city }}</p>
            <p class=""><strong>State:</strong> {{ users.address.state }}</p>
            <p class=""><strong>Country:</strong> {{ users.address.country }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UserProfile',
    data(){
        return {
           users: [],
        }
    },
    methods: {
        getUser(id) {
            axios.get('http://localhost:3000/users/' + id).then(response => {
                console.log(response.data)
                this.users = response.data
                console.log(this.users)
                // console.log an error if get() method is unsuccessful
                }).catch(err => {
                console.log(err)
            })
        }
    },
    // life cycle hook - calls axios
    created(){
        this.getUser(this.$route.params.id)
    },
}
</script>

<style scoped lang="scss">

</style>


