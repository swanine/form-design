<template>
  <section class="plugin_bar">
    <draggable
      class="drag_wrap"
      v-model="list"
      v-bind="dragOption"
      item-key="id"
      group="people"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element }">
        <div class="plugin">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </section>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  components: { draggable },
  setup() {
    const list = ref([
      { name: '单行文本', id: 1 },
      { name: '多行文本', id: 2 },
      { name: '计数器', id: 3 },
      { name: '下拉选择器', id: 4 },
      { name: '时间选择器', id: 5 },
      { name: '颜色选择器', id: 6 },
      { name: '按钮', id: 7 },
      { name: '文字', id: 8 },
      { name: '文字链接', id: 9 },
      { name: '按钮', id: 10 }
    ])

    const dragOption = computed(() => ({
      animation: 300
    }))

    const drag = ref(false)
    return {
      list,
      dragOption,
      drag
    }
  }
})
</script>

<style lang="scss" scoped>
.drag_wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;

  .plugin {
    height: 40px;
    line-height: 40px;
  }
}
</style>
