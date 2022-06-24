<template>
  <section class="plugin_bar">
    <div class="plugin_bar_title">{{ title }}</div>
    <draggable
      class="drag_wrap"
      v-model="list"
      v-bind="dragOption"
      item-key="id"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :sort="false"
      :clone="clonePlugin"
      @change="log"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element }">
        <div
          :class="['plugin', { 'hint--bottom hint--rounded': !drag }]"
          :aria-label="element.name"
        >
          <img :src="imgsrc" />
          <span>{{ element.name }}</span>
        </div>
      </template>
    </draggable>
  </section>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import { defineComponent, computed, ref } from 'vue'
import img from '~/assets/images/pixel.svg'
import PLUGINS from './plugins/publicPlugins'

export default defineComponent({
  components: { draggable },
  props: {
    title: {
      type: String,
      default: '基础字段'
    },
    pluginsList: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const list = ref(PLUGINS)

    const dragOption = computed(() => ({
      animation: 200
    }))

    const log = (evt: any) => {
      window.console.log(evt)
    }

    // 组件id用于选择
    const globalID = ref(list.value.length)
    const clonePlugin = (item: any) => {
      // 返回新对象
      return {
        ...item,
        // eslint-disable-next-line no-plusplus
        id: ++globalID.value,
        width: '50%'
      }
    }

    const imgsrc = ref(img)

    const drag = ref(false)
    return {
      list,
      dragOption,
      drag,
      imgsrc,
      log,
      clonePlugin
    }
  }
})
</script>

<style lang="scss" scoped>
.plugin_bar {
  .plugin_bar_title {
    margin: 20px 0 15px;
    font-weight: 700;
  }

  .drag_wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    .plugin {
      display: flex;
      align-items: center;
      height: 36px;
      border: 1px solid #e6eaf0;
      background-color: #f9fafc;
      color: #494f57;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        border: 1px solid #ccd4e0;
        font-weight: 500;
        color: #131415;
        background: #f4f6f9;
      }

      img {
        margin: 0 6px 0 8px;
      }
    }
  }
}
</style>
