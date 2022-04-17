import { defineComponent } from 'vue'
import Plugins from '../../components/PluginsCard.vue'
import FormView from '../../components/FormView'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="home__wrapper">
          <Plugins></Plugins>
          <FormView></FormView>
        </div>
      )
    }
  }
})
