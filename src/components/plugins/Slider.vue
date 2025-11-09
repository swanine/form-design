<template>
  <el-slider
    v-model="selfValue"
    :disabled="disabled"
    :min="min !== undefined ? min : 0"
    :max="max !== undefined ? max : 100"
    :show-input="true"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Slider',
  props: {
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: undefined
    },
    max: {
      type: Number,
      default: undefined
    }
  },
  setup(props) {
    const selfValue = ref(props.value)
    return {
      selfValue
    }
  }
})
</script>

<style scoped></style>
