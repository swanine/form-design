<template>
  <div
    class="form_body"
    :class="{ preview_mode: isPreview }"
    data-step="3"
    data-intro="拖拽可对表单项进行排序"
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
          :class="[
            'common_wrap',
            { select_: current === element && !isPreview }
          ]"
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

    const isPreview = computed(() => store.state.previewClass)

    const dragOption = computed(() => ({
      animation: 300,
      disabled: isPreview.value // 预览模式下禁用拖拽
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
      // 预览模式下不允许选择
      if (!isPreview.value) {
        store.commit('setCurrentSelectPlugin', item)
      }
    }

    const current = computed(() => store.state.currentSelectPlugin)
    return {
      list,
      selectPlugin,
      dragOption,
      current,
      isPreview
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

  &.preview_mode {
    height: auto;
    min-height: 200px;
    box-shadow: none;
    border-radius: 0;

    .form_list {
      .common_wrap {
        cursor: default;

        &:hover {
          background-color: transparent;
        }

        &.select_ {
          box-shadow: none;
          background-color: transparent !important;
        }

        // 预览模式下允许表单输入交互
        :deep(.el-input__inner),
        :deep(.el-textarea__inner),
        :deep(.el-input-number),
        :deep(.el-input-number__decrease),
        :deep(.el-input-number__increase),
        :deep(.el-select),
        :deep(.el-date-editor),
        :deep(.el-time-picker),
        :deep(.el-color-picker),
        :deep(.el-radio),
        :deep(.el-checkbox),
        :deep(.el-rate),
        :deep(.el-switch),
        :deep(.el-slider),
        :deep(.el-cascader),
        :deep(.el-upload) {
          pointer-events: auto !important;
        }
      }
    }
  }

  .form_list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 15px;

    .common_wrap {
      padding: 8px 6px;
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

      // 非预览模式下禁止直接输入，只能通过拖拽和配置
      :deep(.el-input__inner),
      :deep(.el-textarea__inner),
      :deep(.el-input-number__decrease),
      :deep(.el-input-number__increase) {
        pointer-events: none;
      }
    }
  }
}
</style>
