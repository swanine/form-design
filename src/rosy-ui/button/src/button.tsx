import { defineComponent, toRefs } from 'vue'
import type { SetupContext } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import useButton from './use-button'
import './button.scss'
import ripple from '../../directives/ripple/v-ripple-directives'

export default defineComponent({
  name: 'RButton',
  props: buttonProps,
  emits: ['click'],
  directives: { ripple },
  setup(props: ButtonProps, ctx: SetupContext) {
    const { disabled } = toRefs(props)

    const { classes } = useButton(props, ctx)

    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e)
    }

    return () => {
      return (
        <button
          class={classes.value}
          disabled={disabled.value}
          onClick={onClick}
          v-ripple
        >
          <span class="button-content">{ctx.slots.default?.()}</span>
        </button>
      )
    }
  }
})
