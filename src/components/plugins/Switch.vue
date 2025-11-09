<template>
  <el-switch v-model="selfValue" :disabled="disabled" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Switch',
  props: {
    value: {
      type: Boolean,
      default: false
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
