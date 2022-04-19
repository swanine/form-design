<template>
  <div
    class="form_body"
    data-step="3"
    data-intro="拖拽可对表单项进行排序👉，也没做"
  >
    <draggable
      class="form_list"
      v-bind="dragOption"
      item-key="id"
      v-model="list"
      :group="{ name: 'people' }"
    >
      <template #item="{ element }">
        <div
          :class="['common_wrap', { select_: current.id === element.id }]"
          :style="{ width: element.width }"
          @click="selectPlugin(element)"
        >
          <Common :config="element" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import draggable from 'vuedraggable'
import Common from './Common'
import IConfig from './plugins/types/pluginConfig'

export default defineComponent({
  components: { Common, draggable },
  setup() {
    const store = useStore()

    const dragOption = computed(() => ({
      animation: 300
    }))

    const list = computed<any>({
      get() {
        return store.state.formPluginList
      },
      set(val) {
        store.commit('resetFormPluginList', val)
      }
    })

    const selectPlugin = (item: IConfig) => {
      store.commit('setCurrentSelectPlugin', item)
    }

    const current = computed(() => store.state.currentSelectPlugin)
    return {
      list,
      selectPlugin,
      dragOption,
      current
    }
  }
})
</script>

<style lang="scss" scoped>
.form_body {
  padding: 20px 12px;
  height: calc(100% - 14rem);
  box-shadow: 0 4px 10px #0c1f5014;
  border-radius: 8px;
  background-color: #fff;

  .form_list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 15px;

    .common_wrap {
      padding: 8px 6px;
      // border: 2px solid rgb(202, 191, 253);
      border-radius: 6px;
      cursor: move;
      transition: background-color 0.36s,
        box-shadow 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

      &.select_ {
        box-shadow: 0 0 0 4px rgb(220, 215, 254);
        background-color: rgb(237, 235, 254) !important;
      }

      &:hover {
        background-color: rgb(247, 247, 247);
      }

      ::v-deep .el-input__inner {
        pointer-events: none;
      }
    }
  }
}
</style>
