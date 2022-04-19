import { defineComponent } from 'vue'
import PluginsWrap from '../../components/PluginsWrap'
import FormView from '../../components/FormView'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="home__wrapper">
          <PluginsWrap></PluginsWrap>
          <FormView></FormView>
        </div>
      )
    }
  }
})
