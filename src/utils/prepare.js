import { uuid } from '@/utils/utils';

import CLIP from '@/constants/clip';

export default (data, pageSize = { width: window.innerWidth, height: window.innerHeight }) => {

  return {
    ...data,
    transition: data.transition || {
      direction: 'vertical',
      effect: 'slide'
    },
    pages: preparePages(data.pages, pageSize),
  }
}

export const preparePages = (pages, pageSize) => {
  if (!pages) {
    return [];
  }
  return pages.map((page) => preparePage(page, pageSize));
}

export const preparePage = (page, pageSize) => {
  return {
    ...page,
    id: uuid(),
    elements: page.elements.map((element) => prepareElement(element, pageSize)),
  }
}

export const prepareElement = (element, pageSize) => {
  return {
    ...element,
    position: [
      prepareUnit(element.position[0], pageSize.width),
      prepareUnit(element.position[1], pageSize.height),
    ],
    size: [
      prepareUnit(element.size[0], pageSize.width),
      prepareUnit(element.size[1], pageSize.height),
    ],
    clip: prepareClip(element.clip),
  }
}

export const prepareClip = (clip) => {
  if (!clip) {
    return;
  }
  if (typeof clip === 'string') {
    return CLIP[clip] && {
      id: uuid(),
      path: CLIP[clip],
    };
  }
  return {
    ...clip,
    id: uuid(),
    path: CLIP[clip.path] || clip.path,
  }
}

/**
 * 尺寸单位统一为像素
 * @param {string|number} value 被转换的数值
 * @param {number} base 最大尺寸，将value映射在[0: base]上
 */
export const prepareUnit = (value, base) => {
  if (!value || typeof value === 'number') {
    return value;
  } else if (/px$/.test(value)) {
    return parseFloat(value);
  } else if (/%$/.test(value)) {
    return base * parseFloat(value) / 100;
  } else if (/v[hw]/) {
    return base * parseFloat(value) / 100;
  }
}

export const prepareKeyframes = (animation, target, pageSize) => {
  animation = animation || {};
  const { position, size, rotation } = target;
  const width = prepareUnit(size[0], pageSize.width);
  const height = prepareUnit(size[1], pageSize.height);
  const dMap = {
    slideInLeft: { // 左侧滑入
      translateX: -width,
      translateY: position[1],
    },
    slideInTop: { // 上侧滑入
      translateX: position[0],
      translateY: -height,
    },
    slideInRight: { // 右侧滑入
      translateX: pageSize.width + width,
      translateY: position[1],
    },
    slideInBottom: { // 下侧滑入
      translateX: position[0],
      translateY: pageSize.height + height,
    },
    slideInLeftTop: { // 左上侧滑入
      translateX: -width,
      translateY: -height,
    },
    slideInRightTop: { // 右上侧滑入
      translateX: pageSize.width + width,
      translateY: -height,
    },
    slideInLeftBottom: { // 左下侧滑入
      translateX: -width,
      translateY: pageSize.height + height,
    },
    slideInRightBottom: { // 右下侧滑入
      translateX: pageSize.width + width,
      translateY: pageSize.height + height,
    }
  }

  let keyframes = [];
  if (dMap[animation.type]) {
    // 根据type生成的第一帧
    keyframes.push({
      ...dMap[animation.type],
      width: size[0],
      height: size[1],
    });
  } else if (animation.keyframes) {
    // 配置的关键帧
    keyframes.push(...animation.keyframes);
  }

  // 补充最后一帧
  keyframes.push({
    translateX: position[0],
    translateY: position[1],
    rotate: rotation,
    width: size[0],
    height: size[1],
  })

  return keyframes;
}

export const prepareInitState = (attrs) => {
  if (!attrs) {
    return;
  }
  const { translateX = 0, translateY = 0, rotate = 0, ...others } = attrs;
  return {
    ...others,
    transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg)`,
  };
}