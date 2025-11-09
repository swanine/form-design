# 预览模式布局修复说明

## 问题诊断

预览模式点击后出现错位，主要原因：

1. **样式冲突**：`.mask` 在正常模式和预览模式有两套不同的样式
2. **el-scrollbar 冲突**：el-scrollbar 组件的默认样式影响布局
3. **高度计算问题**：form_body 的固定高度在预览模式不适用

## 修复方案

### 1. 预览模式样式优化

使用 `!important` 强制覆盖正常模式的样式：

```scss
&.preview {
  .mask {
    position: fixed !important;
    top: 60px !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    background-color: rgba(0, 0, 0, 0.6) !important;
    z-index: 9999 !important;
    padding: 40px 20px !important;
    overflow-y: auto !important;
    flex: none !important;
  }
}
```

### 2. el-scrollbar 样式重置

强制重置 el-scrollbar 的内部样式：

```scss
:deep(.el-scrollbar__view) {
  display: flex !important;
  align-items: flex-start !important;
  justify-content: center !important;
  min-height: 100% !important;
}
```

### 3. 表单组件高度自适应

预览模式下移除固定高度限制：

```scss
&.preview_mode {
  height: auto;
  min-height: 200px;
  box-shadow: none;
  border-radius: 0;
}
```

### 4. 交互禁用优化

确保预览模式下：
- 表单结构不可编辑
- 但表单控件可以交互（用于预览填写效果）

```scss
.form_card {
  :deep(.el-input__inner),
  :deep(.el-textarea__inner) {
    pointer-events: auto !important;
  }
}
```

## 关键改动文件

### 1. common.scss
- ✅ 强化预览模式样式优先级
- ✅ 修复 mask 容器布局
- ✅ 优化 el-scrollbar 样式
- ✅ 添加表单控件交互恢复

### 2. FormView.tsx
- ✅ 简化点击事件处理
- ✅ 移除不必要的 onMounted
- ✅ 优化事件冒泡控制

### 3. FormBody.vue
- ✅ 预览模式移除固定高度
- ✅ 禁用所有交互
- ✅ 移除选中状态

## 测试检查

启动项目后测试以下场景：

### 正常模式
- [ ] 左侧组件面板正常显示
- [ ] 中间表单编辑区正常滚动
- [ ] 右侧配置面板正常显示
- [ ] 拖拽功能正常工作

### 预览模式
- [ ] 点击预览按钮，遮罩层完整覆盖
- [ ] 表单卡片在屏幕中央显示
- [ ] 表单内容不错位、不变形
- [ ] 顶部提示正确显示
- [ ] 表单可以正常滚动查看

### 预览交互
- [ ] 点击表单外部区域关闭预览
- [ ] 按 ESC 键关闭预览
- [ ] 点击"关闭预览"按钮工作正常
- [ ] 表单标题和描述不可编辑
- [ ] 字段不可选择、不可拖拽
- [ ] 表单输入框可以交互（预览填写）

### 退出预览
- [ ] 退出后左右面板恢复显示
- [ ] 表单编辑功能恢复正常
- [ ] 没有残留的遮罩或样式

## 调试技巧

如果仍然出现布局问题，可以：

1. **检查浏览器控制台**：查看是否有 CSS 冲突警告
2. **检查元素样式**：使用开发者工具查看实际应用的样式
3. **清除缓存**：`Cmd/Ctrl + Shift + R` 强制刷新
4. **检查 z-index**：确保预览遮罩层级最高

## 常见问题

### Q: 预览时表单卡片偏移到左上角？
A: 检查 `.mask` 的 `display: flex` 和 `align-items: center` 是否生效

### Q: 预览时表单内容被截断？
A: 检查 `overflow-y: auto` 是否应用到 `.mask` 容器

### Q: 点击外部区域无法关闭？
A: 检查 `handleMaskClick` 事件是否正确绑定

### Q: 预览时表单可以编辑？
A: 检查 `.preview_mode` class 是否正确添加到组件

## 性能优化

- ✅ 使用 CSS 动画代替 JS 动画
- ✅ 避免不必要的 DOM 查询
- ✅ 使用事件委托减少监听器
- ✅ 合理使用 `!important` 避免过度使用

预览功能现已优化完成！🎉
