<template>
  <div class="form-group">
    <slot name="label">
      <label v-if="label"> {{ label }} {{ required ? '*' : '' }}</label>
    </slot>
    <slot>
      <input
          :value="value"
          v-bind="$attrs"
          class="form-control"
          :style="'color:'+ textColor"
      >
    </slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'ds-elements-input',
  props: {
    required: Boolean,
    label: {
      type: String,
    },
    textColor: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
    },
  },
  model: {
    prop: 'value',
    event: 'input'
  },
}
</script>