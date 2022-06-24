<template>
  <el-input
    v-model="selfValue"
    :autosize="{ minRows: rows, maxRows: 4 }"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Textarea',
  props: {
    value: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 3
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
