<template>
  <div>
    <div class="card mb-3" v-for="question in questions" :key="question._id">
      <div class="bg-primary text-white">
        <h4 class="pl-2 pr-2">{{question.title}}</h4>
      </div>
      <div class="card-body">
        {{id}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['id'],
  name: 'listquestion',
  computed: {
    ...mapState(['isLogin', 'user', 'questions', 'question'])
  },
  watch: {
    id () {
      if (this.id !== undefined) {
        alert(this.id)
      }
    }
  }
}
</script>
