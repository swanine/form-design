<template>
  <el-select
    v-model="selfValue"
    :placeholder="placeholder || '请选择'"
    :disabled="disabled"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Dropdown',
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' }
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
