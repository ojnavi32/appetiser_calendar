<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <b-alert v-model="alert">
          Click <strong>Go</strong> to see the calendar!
        </b-alert>
        <b-button size="sm" @click="$router.push({ name: 'calendar' })">GO!</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alert: true
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 10%;
}
</style>