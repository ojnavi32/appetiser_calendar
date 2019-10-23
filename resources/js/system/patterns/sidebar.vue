<template>
  <component :is="type" :class="background">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ds-patterns-sidebar',
  props: {
    type: {
      type: String,
      default: 'div'
    },
    background: {
      type: String,
      default: 'bg-primary'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@system-tokens';

.bg-primary {
  background-color: $color-primary;
  border-color: $color-primary-darker;
}

.bg-default {
  background-color: $color-default;
  border-color: $color-default-darker;
}

.bg-success {
  background-color: $color-success;
  border-color: $color-success-darker;
}

.bg-danger {
  background-color: $color-danger;
  border-color: $color-danger-darker;
}

.bg-warning {
  background-color: $color-warning;
  border-color: $color-warning-darker;
}
</style>