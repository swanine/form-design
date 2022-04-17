import { defineComponent, PropType, ref } from 'vue'
import { Input } from './plugins/index'
import IConfig from './plugins/types/pluginConfig'

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<IConfig>
    }
  },
  setup(props) {
    return () => {
      return (
        <>
          <div class="plugin_title">{props.config?.name}</div>
          <Input value={props.config?.value}></Input>
        </>
      )
    }
  }
})
