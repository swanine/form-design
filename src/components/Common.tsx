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
          <div class="plugin_title">
            {props.config?.name}
            {props.config?.required && <span class="required_mark">*</span>}
          </div>
          {plugins.map((item) => {
            if (props.config?.plugin === item.name) {
              return (
                <item
                  value={props.config?.value}
                  type={props.config?.type}
                  options={props.config?.options}
                  rows={props.config?.rows}
                  placeholder={props.config?.placeholder}
                  disabled={props.config?.disabled}
                  readonly={props.config?.readonly}
                  min={props.config?.min}
                  max={props.config?.max}
                />
              )
            }
          })}
        </>
      )
    }
  }
})
