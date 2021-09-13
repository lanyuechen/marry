## 使用到的技术

- react 前端框架
- antd UI组件
- animejs 动画
- swiper 轮播/切换
- lokijs 前端数据库
- react-easy-crop 图片裁切
- immutability-helper 不可变对象

- jsdelivr加速（eg: https://cdn.jsdelivr.net/gh/lanyuechen/marry/README.md）

## 可能使用到的技术

- [pica](https://github.com/nodeca/pica) 用于图片压缩
- [compressorjs](https://github.com/fengyuanchen/compressorjs) 用于图片压缩
- [grade](https://github.com/benhowdle89/grade) 用于通过图片的主色调生成背景色
- [lena.js](https://github.com/davidsonfellipe/lena.js) 用于给图片添加滤镜
- [fabric.js](https://github.com/fabricjs/fabric.js) 用于图形编辑

## 目前存在的问题

- 音频自动播放问题
- 展示页面的单独打包问题

## 配置说明

### 视图配置-View

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| name | string | 名称 | - |
| description | string | 描述 | - |
| cover | string | 封面 | - |
| tags | string[] | 标签 | - |
| audio | [Audio](#音频配置-Audio) | 背景音乐配置 | - |
| transition | [Transition](#过渡配置-Transition) | 页面过渡配置 | - |
| pages | [Page](#页面配置-Page)[] | 页面配置数组 | - |

### 音频配置-Audio

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| src | string | 音频文件地址 | - |
| autoPlay | boolean | 是否自动播放音频 | false |

### 过渡配置-Transition

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| direction | enum | 过渡方向(horizontal, vertical) | horizontal |
| effect | enum | 过渡效果(slide, fade, cube, coverflow, flip) | slide |
| autoPlay | boolean\|AutoplayOptions | 是否自动切换页面 | false |
| duration | number | 自动切换时间间隔，autoPlay为true时有效 | 3000 |

- slide: 普通切换、默认
- fade: 淡入
- cube: 方块
- coverflow: 3d流
- flip: 3d翻转

### 页面配置-Page

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| background | string | 页面背景 | - |
| elements | [Element](#元素配置-Element)[] | 组件配置数组 | - |

### 元素配置-Element

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | enum | 组件类型，包括(image, text) | - |
| position | array[x, y] | 组件位置 | [0, 0] |
| size | array[width, height] | 组件大小 | [100, 100] |
| rotation | number | 组件旋转角度 | 0 |
| clip | [Clip](#元素裁剪配置-Clip) | 元素裁剪 | - |
| props | [Prop](#元素组件配置-Prop) | 组件属性，其具体结构根据type不同而不同 | - |
| animation | [Animation](#动画配置-Animation) | 动画属性 | - |

### 元素裁剪配置-Clip

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| id | string | clip-path的id | 系统自动生成 | 
| path | string | path属性 | - |
| scale | number | 缩放 | - |

### 元素组件配置-Prop

不同组件属性不同，具体参考如下：
- [图片（type=image）](#图片-Image)
- [文字（type=text）](#文字-Text)
- ...

### 动画配置-Animation

动画属性定义参考了[anime.js文档](https://animejs.com/documentation)

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | enum | 动画类型，例如slide、fade等动画效果可以自动生成相关keyframes | - |
| duration | number | 动画持续时间 | 1000 |
| delay | number | 动画开始延迟时间 | 0 |
| keyframes | array | 动画关键帧，[详细参考](https://animejs.com/documentation/#animationKeyframes) | - |


## 页面元素

### 图片-Image

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| src | string | 图片地址 | - |
| size | array | 图片显示尺寸 | - |
| crop | object | 图片缩放、旋转变化参数 | - |
### 文字-Text

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| value | string | 显示的文字内容 | - |

### 图标-Icon

| 属性 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | string | 图标类型 | - |