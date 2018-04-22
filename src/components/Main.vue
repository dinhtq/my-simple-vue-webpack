<template>
  <div class="main-wrapper">
    <h1>Rapid Prototyping with Vuex, Vue-resource, Bootstrap and Less</h1>
    {{ toDos }}
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'Main',

  mounted () {
    // this.fetchToDos();
  },

  data () {
    return {
      msg: 'Hello'
    }
  },

  computed: {
    ...mapState({
      toDos: 'toDos'
    })
  },

  methods: {
    ...mapActions(['fetchToDos'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main-wrapper {
    height: 100%;
  }
</style>
