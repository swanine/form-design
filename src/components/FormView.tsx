import { computed, defineComponent, ref } from 'vue'
import FromHead from './FormHead'
import FromBody from './FormBody.vue'
import PluginConfig from './PluginConfig.vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const current = computed(() => store.state.currentSelectPlugin)

    return () => {
      return (
        <>
          <el-scrollbar>
            <div class="form_wrap">
              <div class="form_card">
                <FromHead></FromHead>
                <FromBody></FromBody>
              </div>
            </div>
          </el-scrollbar>
          <PluginConfig current={current.value}></PluginConfig>
        </>
      )
    }
  }
})
