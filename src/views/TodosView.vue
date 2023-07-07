<template>
  <div>
    <div v-for="item in state.todos" :key="item.author">
        <h4>
            {{ item.author }}
        </h4>
        <p>
            {{ item.todo }}
        </p>

    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup() {
        const state = reactive({
            todos:{}
        })

        function GetAll() {}
          fetch("http://localhost:3000/todos")
            .then(res => res.json())
            .then(data => {
              state.todos = data
            })
        GetAll()

        return {
            state,
            GetAll
        }
    }
}
</script>

<style scoped>

</style>