<template>
  <div>
    <h3>{{ counter }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("simpleCounter", ["counter"])
  },
  methods: {
    ...mapActions("simpleCounter", ["increment", "decrement"])
  }
};
</script>

<style scoped></style>


