import { defineComponent, PropType, ref } from 'vue'
import plugins from './plugins/index'
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
          {plugins.map((item) => {
            if (props.config?.plugin === item.name) {
              console.log(item)
              return (
                <item value={props.config?.value} type={props.config?.type} />
              )
            }
          })}
        </>
      )
    }
  }
})
