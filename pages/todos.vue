<template>
  <div>
    <ul>
      <li v-for="(todo, todoIndex) in todos" :key="'todo_' + todoIndex">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    todos: [
      "Walk in the morning",
      "Clean the bedroom",
      "Make the lunch",
      "Take a bath"
    ]
  })
};
</script>

<style scoped></style>



