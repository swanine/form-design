<template>
  <el-cascader
    v-model="selfValue"
    :options="options"
    :placeholder="placeholder || '请选择'"
    :disabled="disabled"
    style="width: 100%"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Cascader',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => [
        {
          value: '1',
          label: '选项1',
          children: [
            { value: '1-1', label: '选项1-1' },
            { value: '1-2', label: '选项1-2' }
          ]
        },
        {
          value: '2',
          label: '选项2',
          children: [
            { value: '2-1', label: '选项2-1' },
            { value: '2-2', label: '选项2-2' }
          ]
        }
      ]
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const selfValue = ref(props.value)
    return {
      selfValue,
      options: props.options
    }
  }
})
</script>

<style scoped></style>
