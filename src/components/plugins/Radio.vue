<template>
  <el-radio-group v-model="selfValue" :disabled="disabled">
    <el-radio v-for="item in options" :key="item.value" :label="item.value">
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Radio',
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
