<template>
  <div class="plugin_config" :class="{ is_hid: !current.name }">
    <div class="config_header">
      <h3>字段配置</h3>
    </div>
    <div class="config_body">
      <!-- 基础配置 -->
      <div class="config_section" v-if="current.name">
        <h4 class="section_title">基础设置</h4>

        <div class="config_item">
          <label>字段标题</label>
          <el-input
            v-model="currentRef.name"
            @change="changeName"
            placeholder="请输入字段标题"
          />
        </div>

        <div class="config_item">
          <label>提示文字</label>
          <el-input
            v-model="currentRef.placeholder"
            @change="changePlaceholder"
            placeholder="请输入提示文字"
          />
        </div>

        <div class="config_item">
          <label>字段宽度</label>
          <el-select v-model="currentRef.width" @change="changeWidth">
            <el-option label="25%" value="25%" />
            <el-option label="50%" value="50%" />
            <el-option label="75%" value="75%" />
            <el-option label="100%" value="100%" />
          </el-select>
        </div>

        <div class="config_item">
          <label>组件类型</label>
          <el-tag type="info">{{ current.plugin }}</el-tag>
        </div>
      </div>

      <!-- 表单验证 -->
      <div class="config_section" v-if="current.name">
        <h4 class="section_title">表单验证</h4>

        <div class="config_item">
          <el-checkbox v-model="currentRef.required" @change="changeRequired">
            必填字段
          </el-checkbox>
        </div>

        <div class="config_item" v-if="showMinMaxConfig">
          <label>最小值</label>
          <el-input-number
            v-model="currentRef.min"
            @change="changeMin"
            :controls="false"
            placeholder="最小值"
            style="width: 100%"
          />
        </div>

        <div class="config_item" v-if="showMinMaxConfig">
          <label>最大值</label>
          <el-input-number
            v-model="currentRef.max"
            @change="changeMax"
            :controls="false"
            placeholder="最大值"
            style="width: 100%"
          />
        </div>
      </div>

      <!-- 选项配置 (针对下拉、单选、多选) -->
      <div class="config_section" v-if="showOptionsConfig">
        <h4 class="section_title">选项设置</h4>

        <div class="options_list">
          <div
            class="option_item"
            v-for="(option, index) in currentRef.options"
            :key="index"
          >
            <el-input
              v-model="option.label"
              placeholder="选项标签"
              size="small"
              @change="updateOptions"
            />
            <el-button
              type="danger"
              size="small"
              :icon="'Delete'"
              circle
              @click="removeOption(index)"
            />
          </div>
        </div>

        <el-button
          size="small"
          type="primary"
          plain
          @click="addOption"
          style="width: 100%; margin-top: 10px"
        >
          + 添加选项
        </el-button>
      </div>

      <!-- 样式配置 -->
      <div class="config_section" v-if="current.name">
        <h4 class="section_title">样式设置</h4>

        <div class="config_item" v-if="showRowsConfig">
          <label>文本行数</label>
          <el-input-number
            v-model="currentRef.rows"
            @change="changeRows"
            :min="2"
            :max="10"
            style="width: 100%"
          />
        </div>

        <div class="config_item">
          <el-checkbox v-model="currentRef.disabled" @change="changeDisabled">
            禁用状态
          </el-checkbox>
        </div>

        <div class="config_item">
          <el-checkbox v-model="currentRef.readonly" @change="changeReadonly">
            只读状态
          </el-checkbox>
        </div>
      </div>

      <!-- 操作区域 -->
      <div class="config_actions" v-if="current.name">
        <el-button type="primary" size="small" @click="duplicateItem">
          复制字段
        </el-button>
        <el-button type="danger" size="small" @click="deleteItem">
          删除字段
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    current: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const store = useStore()
    const currentRef = reactive({
      name: '',
      width: '50%',
      placeholder: '',
      required: false,
      disabled: false,
      readonly: false,
      min: undefined,
      max: undefined,
      rows: 3,
      options: [] as any[]
    })

    watchEffect(() => {
      currentRef.name = props.current.name || ''
      currentRef.width = props.current.width || '50%'
      currentRef.placeholder = props.current.placeholder || ''
      currentRef.required = props.current.required || false
      currentRef.disabled = props.current.disabled || false
      currentRef.readonly = props.current.readonly || false
      currentRef.min = props.current.min
      currentRef.max = props.current.max
      currentRef.rows = props.current.rows || 3
      currentRef.options = props.current.options
        ? [...props.current.options]
        : []
    })

    // 判断是否显示选项配置
    const showOptionsConfig = computed(() => {
      const { plugin } = props.current
      return (
        plugin === 'Dropdown' ||
        plugin === 'Radio' ||
        plugin === 'Checkbox' ||
        plugin === 'Cascader'
      )
    })

    // 判断是否显示最小最大值配置
    const showMinMaxConfig = computed(() => {
      const { plugin } = props.current
      return (
        plugin === 'Counter' ||
        plugin === 'Input' ||
        plugin === 'Slider' ||
        plugin === 'Rate'
      )
    })

    // 判断是否显示行数配置
    const showRowsConfig = computed(() => {
      return props.current.plugin === 'Textarea'
    })

    const updateField = (prop: string, value: any) => {
      store.commit('setFormPluginItem', {
        id: props.current.id,
        changeProp: prop,
        changeValue: value
      })
    }

    const changeName = ({ target }: any) => {
      updateField('name', target.value)
    }

    const changePlaceholder = ({ target }: any) => {
      updateField('placeholder', target.value)
    }

    const changeWidth = (value: string) => {
      updateField('width', value)
    }

    const changeRequired = (value: boolean) => {
      updateField('required', value)
    }

    const changeDisabled = (value: boolean) => {
      updateField('disabled', value)
    }

    const changeReadonly = (value: boolean) => {
      updateField('readonly', value)
    }

    const changeMin = (value: number) => {
      updateField('min', value)
    }

    const changeMax = (value: number) => {
      updateField('max', value)
    }

    const changeRows = (value: number) => {
      updateField('rows', value)
    }

    // 选项管理
    const addOption = () => {
      const newOptions = [...currentRef.options]
      newOptions.push({
        label: `选项${newOptions.length + 1}`,
        value: `${newOptions.length + 1}`
      })
      currentRef.options = newOptions
      updateField('options', newOptions)
    }

    const removeOption = (index: number) => {
      const newOptions = currentRef.options.filter(
        (_: any, i: number) => i !== index
      )
      currentRef.options = newOptions
      updateField('options', newOptions)
    }

    const updateOptions = () => {
      updateField('options', [...currentRef.options])
    }

    // 复制字段
    const duplicateItem = () => {
      const newItem = {
        ...props.current,
        id: Date.now(),
        name: `${props.current.name} (副本)`
      }
      store.commit('setFormPluginList', newItem)
    }

    // 删除字段
    const deleteItem = () => {
      const list = store.state.formPluginList.filter(
        (item: any) => item.id !== props.current.id
      )
      store.commit('resetFormPluginList', list)
      store.commit('setCurrentSelectPlugin', { name: '' })
    }

    return {
      currentRef,
      showOptionsConfig,
      showMinMaxConfig,
      showRowsConfig,
      changeName,
      changePlaceholder,
      changeWidth,
      changeRequired,
      changeDisabled,
      changeReadonly,
      changeMin,
      changeMax,
      changeRows,
      addOption,
      removeOption,
      updateOptions,
      duplicateItem,
      deleteItem
    }
  }
})
</script>

<style lang="scss" scoped>
.plugin_config {
  width: 320px;
  height: 100%;
  background-color: #ffffff;
  border-left: 1px solid #e8e8e8;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  overflow-y: auto;

  &.is_hid {
    width: 0;
    transform: translateX(100%);
  }

  .config_header {
    padding: 20px;
    border-bottom: 1px solid #e8e8e8;
    background-color: #fafafa;

    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
  }

  .config_body {
    padding: 20px;

    .config_section {
      margin-bottom: 24px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;

      &:last-of-type {
        border-bottom: none;
      }

      .section_title {
        margin: 0 0 16px 0;
        font-size: 14px;
        font-weight: 600;
        color: #333;
        display: flex;
        align-items: center;

        &:before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 14px;
          background-color: #409eff;
          margin-right: 8px;
          border-radius: 2px;
        }
      }
    }

    .config_item {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      label {
        display: block;
        margin-bottom: 8px;
        font-size: 13px;
        color: #666;
        font-weight: 500;
      }

      :deep(.el-input),
      :deep(.el-select),
      :deep(.el-input-number) {
        width: 100%;
      }

      :deep(.el-checkbox) {
        font-size: 13px;
      }
    }

    .options_list {
      .option_item {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;

        :deep(.el-input) {
          flex: 1;
        }

        :deep(.el-button) {
          flex-shrink: 0;
        }
      }
    }

    .config_actions {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e8e8e8;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .el-button {
        width: 100%;
      }
    }
  }
}

// 滚动条样式
.plugin_config::-webkit-scrollbar {
  width: 6px;
}

.plugin_config::-webkit-scrollbar-thumb {
  background-color: #d0d0d0;
  border-radius: 3px;

  &:hover {
    background-color: #b0b0b0;
  }
}

.plugin_config::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
</style>
