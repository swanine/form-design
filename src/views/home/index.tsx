import { defineComponent, computed, onMounted } from 'vue'
import PageHead from '~/components/PageHead'
import PluginsWrap from '~/components/PluginsWrap'
import FormView from '~/components/FormView'
import PluginConfig from '~/components/PluginConfig.vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    onMounted(() => {
      const loader = document.querySelector<HTMLDivElement>('.loader')
      loader?.remove()
    })

    const store = useStore()
    const current = computed(() => store.state.currentSelectPlugin)
    const preview = computed(() => store.state.previewClass)

    return () => {
      return (
        <div class={['page_wrapper', { preview: preview.value }]}>
          <PageHead></PageHead>
          <div class="home__wrapper">
            <PluginsWrap></PluginsWrap>
            <FormView></FormView>
            <PluginConfig current={current.value}></PluginConfig>
          </div>
        </div>
      )
    }
  }
})
