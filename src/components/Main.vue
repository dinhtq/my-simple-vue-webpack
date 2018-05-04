<template>
  <div class="main-wrapper">
    <h1>My ToDo Lists</h1>
    
    <div class="container">
      <ul class="list-group">
        <li v-for="toDo in toDos" :key="toDo.id" 
            class="list-group-item">
            {{ toDo.title }}
          </li>
      </ul>

      <div class="input-group mb-3">
        <input v-model.trim="newToDos" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="_addToDos()">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'Main',

  mounted () {
    this.fetchToDos();
  },

  data () {
    return {
      newToDos: ''
    }
  },

  computed: {
    ...mapState({
      toDos: 'toDos'
    })
  },

  methods: {
    ...mapActions(['fetchToDos', 'addToDos']),

    _addToDos () {
      this.addToDos(({
        title: this.newToDos
      }));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main-wrapper {
    height: 100%;

    .container {
      width: 500px;
    }
  }
</style>
