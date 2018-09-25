<template>
  <div>
    <div class="card mb-3" v-for="question in questions" :key="question._id">
      <div class="bg-primary text-white">
        <h4 class="pl-2 pr-2">{{question.title}}</h4>
      </div>
      <div class="card-body">
        <p> Question from {{question.owner.name}} </p>
        <p> Total Answers <strong>{{question.answers.length}}</strong> </p>
        <p> Updated At {{question.updatedAt}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'listquestion',
  computed: {
    ...mapState(['isLogin', 'user', 'questions'])
  }
}
</script>
