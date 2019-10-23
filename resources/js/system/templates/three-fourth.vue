<template>
  <component :is="type" class="three-fourth-template">
    <div class="row">
      <div :class="sidebarRight ? 'col-md-9' : 'col-md-3'">
        <!-- sidebar -->
        <slot name="sidebar" />
      </div>
      <div :class="sidebarRight ? 'col-md-3' : 'col-md-9'">
        <!-- your content here -->
        <slot />
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: 'ds-template-three-fourth',
  props: {
    type: {
      type: String,
      default: 'div'
    },
    sidebarRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@system-tokens';

.three-fourth-template {
  margin: $space-m;
}
</style>