<template>
  <div class="form_body">
    <draggable
      class="form_list"
      v-bind="dragOption"
      item-key="id"
      v-model="list"
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

    const list = computed(() => store.state.formPluginList)

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
  }

  .select_ {
    box-shadow: 0 0 0 4px rgb(220, 215, 254);
  }
}
</style>
