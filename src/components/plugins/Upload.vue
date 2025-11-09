<template>
  <el-upload
    class="upload-demo"
    action="#"
    :auto-upload="false"
    :disabled="disabled"
  >
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Upload',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
.upload-demo {
  width: 100%;
}
</style>
