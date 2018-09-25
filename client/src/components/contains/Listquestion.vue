<template>
  <div>
    {{questions}}
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
