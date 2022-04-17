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
          <main class="form_overview">
            <div class="form_wrap">
              <el-scrollbar>
                <div class="form_card">
                  <FromHead></FromHead>
                  <FromBody></FromBody>
                </div>
              </el-scrollbar>
            </div>
          </main>
          <PluginConfig current={current.value}></PluginConfig>
        </>
      )
    }
  }
})
