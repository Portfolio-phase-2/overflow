<template>
  <div>
    <div class="card mb-3">
      <div class="bg-primary text-white">
        <h4 class="pl-2 pr-2">{{question.title}}</h4>
      </div>
      <div class="card-body">
        <button class="btn btn-sm btn-outline-success" v-if="user._id !== question.owner._id" @click="up(question._id)">{{question.vote.length}} Up </button>
        <button class="btn btn-sm btn-outline-warning ml-1" v-if="user._id !== question.owner._id" @click="down(question._id)">{{question.unvote.length}} Down </button>
        <button class="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#modalEditquestion" v-if="user._id == question.owner._id" @click="editData(question)">Edit</button>
        <button @click="deleteMyquestion(question._id)" class="btn btn-sm btn-outline-danger ml-1" v-if="user._id == question.owner._id">Delete</button>
        <br />
        <small>
        By: {{question.owner.name}} <br />
        CreatedAt: {{question.createdAt}} <br />
        {{question.answers.length}} answers in this question</small>
        <hr>
        <div v-html="question.description" class="mb-3"></div>
            <h5 class="bg-secondary text-white" v-if="question.answers.length>0">answers</h5>
            <div class="card mb-3" v-for="com in question.answers" :key="com._id">
              <strong>{{com.owner.name}} said: </strong>
              <blockquote>{{com.answer}}</blockquote>
              <a class="text-success" v-if="user._id !== com.owner._id" @click="upp(com._id)">{{com.vote.length}} Up </a>
              <a class="text-warning" v-if="user._id !== com.owner._id" @click="downn(com._id)">{{com.unvote.length}} Down </a>
              <a href="#" class="text-danger" v-if="user._id == com.owner._id" @click="deleteAnswer(com._id)">Delete</a>
            </div>
            <div v-if="user._id">
              <textarea class="form-control mb-3" placeholder="answer here..." v-model="answer"></textarea>
              <button class="btn btn-outline-success btn-sm float-right" @click="saveanswer(question._id)">answer</button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  props: ['id'],
  name: 'listquestion',
  created () {
    this.getQuestion()
  },
  computed: {
    ...mapState(['isLogin', 'user'])
  },
  data () {
    return {
      question: {},
      answer: ''
    }
  },
  methods: {
    up (id) {
      axios({
        url: `http://localhost:3000/questions/${id}/vote`,
        method: 'patch',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          this.getQuestion()
        })
        .catch(err => console.log(err))
    },
    down (id) {
      axios({
        url: `http://localhost:3000/questions/${id}/unvote`,
        method: 'patch',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          console.log(`object`)
          this.getQuestion()
        })
        .catch(err => console.log(err))
    },
    upp (id) {
      axios({
        url: `http://localhost:3000/answers/${id}/vote`,
        method: 'patch',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          this.getQuestion()
        })
        .catch(err => console.log(err))
    },
    downn (id) {
      axios({
        url: `http://localhost:3000/answers/${id}/unvote`,
        method: 'patch',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          console.log(`object`)
          this.getQuestion()
        })
        .catch(err => console.log(err))
    },
    getQuestion () {
      axios({
        url: `http://localhost:3000/questions/${this.id}`,
        method: 'get'
      })
        .then(found => {
          this.question = found.data
        })
        .catch(err => console.log(err))
    },
    saveanswer (id) {
      axios({
        url: `http://localhost:3000/answers/${id}`,
        method: 'post',
        data: {
          answer: this.answer
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(found => {
          this.getQuestion()
          this.answer = ''
        })
        .catch(err => console.log(err))
    },
    deleteAnswer (id) {
      axios({
        url: `http://localhost:3000/answers/${id}`,
        method: 'delete',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(found => {
          this.getQuestion()
        })
        .catch(err => console.log(err))
    },
    editData (payload) {
      this.editArtikel = payload
    }
  }
}
</script>
