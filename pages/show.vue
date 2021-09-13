<template>
  <div class="show">
    <button @click="$myPlugin.showRoutePath()">Route path</button>
    <button @click="$myPlugin.showDate()">Date</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.show {
  padding: 25px;
}
</style>

