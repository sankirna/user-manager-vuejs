<template>
  <div class="users-list">

    <!-- Navbar section -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
        <b-navbar-brand href="#" class="text-uppercase">User List</b-navbar-brand>

        <!-- Custom Search filter markup -->
        <b-form-input size="sm" class="col-6 col-sm-6 col-md-4 col-lg-3 ml-auto" placeholder="Search Users..." v-model="searchUsers"></b-form-input>
      </div>
    </b-navbar>
    
    <!-- List Rendering the response data  -->
      <div v-if="userNum > 0">
        <div class="container my-3">
          <div v-for="(user, index) in filteredUsers" :key="index" class="users">
            <div class="p-4 m-0 border"><span>{{ index + 1 }} -</span> {{ user.title }}

              <!-- Delete button -->
              <button type="button" class="float-right btn btn-danger py-1 px-3 ml-3" @click="showModal">Delete</button>
              <!-- Modal Confirmation to Delete User -->
              <modal class="row justify-content-center" v-show="isModalVisible" @close="closeModal" @deleteItem="deleteUser" />

              <!-- Routed button to user details -->
              <router-link :to="'/users/'+ user.id">
                <b-button variant="success" class="float-right py-1 px-3">Details</b-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Warning message when no users -->
      <b-alert v-else class="container my-3" variant="warning" show>There are no any users!</b-alert>
  </div>
</template>

<script>

// import axios
import axios from 'axios'
// Modal Delete User Confirmation importing Component
import modal from './modal.vue';

export default {
  name: 'Home',
  components: {
    modal
  },
  data(){
    return {
      users: [],
      searchUsers: '',
      isModalVisible: false
    }
  },
  methods: {
    // Delete an user
    deleteUser(index) {
      this.users.splice(index, 1)
      this.closeModal()
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    // custom search box for user names
    filteredUsers() {
      return this.users.filter(user => {
        return user.title.toLowerCase().match(this.searchUsers)
      })
    },
    // Check for user numbers
    userNum() {
      return this.users.length 
    }
  },
  // life cycle hook - calls axios
  created(){
    axios.get('http://localhost:3000/users').then(response => {
      this.users = response.data
      // console.log an error if get() method is unsuccessful
    }).catch(err => {
      console.log(err)
    })
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.users {
  background: #fff;
  &:nth-of-type(odd) {
    background: #dbdada;
  } 
}

</style>
