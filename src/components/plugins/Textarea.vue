<template>
  <el-input
    v-model="selfValue"
    :autosize="{ minRows: rows, maxRows: rows + 2 }"
    type="textarea"
    :placeholder="placeholder || 'Please input'"
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="max"
    :show-word-limit="!!max"
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
