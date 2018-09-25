<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <Popular></Popular>
        </div>
        <div class="col-md-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from '@/components/headers/navbar.vue'
import Popular from '@/components/contains/Popular.vue'
export default {
  components: {
    Navbar, Popular
  },
  computed: {
    ...mapState(['isLogin', 'user'])
  },
  created () {
    this.userSigninCheck()
    this.failedToken()
    this.getQuestion()
  },
  methods: {
    ...mapActions(['loginIn', 'cekUserLogin', 'destroyLogin', 'getQuestions']),
    userSigninCheck () {
      let token = localStorage.getItem('token')
      if (token) {
        this.cekUserLogin()
      }
    },
    failedToken () {
      if (this.user.name === undefined) {
        this.destroyLogin()
      }
    },
    getQuestion () {
      this.getQuestions()
    }
  },
  watch: {
    isLogin () {
      if (this.isLogin === true) {
        this.userSigninCheck()
      } else {
        this.failedToken()
      }
    }
  }
}
</script>
