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
    const list = ref([
      { name: '单行文本', id: 1 },
      { name: '多行文本', id: 2 },
      { name: '计数器', id: 3 },
      { name: '下拉选择', id: 4 },
      { name: '时间选择', id: 5 },
      { name: '颜色选择', id: 6 },
      { name: '按钮', id: 7 },
      { name: '文字', id: 8 },
      { name: '文字链接', id: 9 },
      { name: '按钮', id: 10 }
    ])

    const dragOption = computed(() => ({
      animation: 200
    }))

    const imgsrc = ref(img)

    const drag = ref(false)
    return {
      list,
      dragOption,
      drag,
      imgsrc
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
