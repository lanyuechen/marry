## 视图配置（View）

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| audio | [Audio](#音频配置（Audio）) | 背景音乐配置 | - |
| pages | [Page](#页面配置（Page）)[] | 页面配置数组 | - |

## 音频配置（Audio）

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| src | string | 音频文件地址 | - |

## 页面配置（Page）

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| background | string | 页面背景 | - |
| elements | [Element](#元素配置（Element）)[] | 组件配置数组 | - |

## 元素配置（Element）

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | enum | 组件类型，包括(image, text) | - |
| position | array[x, y, width, height] | 组件位置/大小 | [0, 0, 100, 100] |
| rotation | number | 组件旋转角度 | 0 |
| props | [Prop](#元素组件配置（Prop）) | 组件属性，其具体结构根据type不同而不同 | - |
| animation | [Animation](#动画配置（Animation）) | 动画属性 | - |

### 元素组件配置（Prop）

| type值 | 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| image | src | string | 图片地址 | - |
| text | value | string | 显示的文字内容 | - |

## 动画配置（Animation）

动画属性定义参考了[anime.js文档](https://animejs.com/documentation)

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | enum | 动画类型，例如slide、fade等动画效果可以自动生成相关keyframes | - |
| duration | number | 动画持续时间 | 1000 |
| delay | number | 动画开始延迟时间 | 0 |
| keyframes | array | 动画关键帧，[详细参考](https://animejs.com/documentation/#animationKeyframes) | - |
