<template>
  <el-time-picker
    v-model="selfValue"
    :placeholder="placeholder || '选择时间'"
    :disabled="disabled"
    :readonly="readonly"
    style="width: 100%"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TimePicker',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
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
