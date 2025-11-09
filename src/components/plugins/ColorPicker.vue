<template>
  <el-color-picker v-model="selfValue" :disabled="disabled" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ColorPicker',
  props: {
    value: {
      type: String,
      default: '#409EFF'
    },
    disabled: {
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
