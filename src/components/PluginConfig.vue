<template>
  <div class="plugin_config" :class="{ is_hid: !current.name }">
    <el-button>按钮</el-button>
    <h1>{{ current.name }}</h1>
    <input type="text" v-model="currentRef.name" @change="change" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    current: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const store = useStore()
    const currentRef = reactive({
      name: ''
    })

    watchEffect(() => {
      currentRef.name = props.current.name
    })

    const change = ({ target }) => {
      store.commit('setFormPluginItem', {
        id: props.current.id,
        changeProp: 'name',
        changeValue: target.value
      })
    }
    return {
      currentRef,
      change
    }
  }
})
</script>

<style lang="scss" scoped>
.plugin_config {
  width: 260px;
  height: 100%;
  background-color: pink;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  &.is_hid {
    width: 0;
    transform: translateX(100%);
  }
}
</style>
