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
    elements: prepareElements(page.elements, pageSize),
  }
}

export const prepareElements = (elements, pageSize) => {
  if (!elements) {
    return [];
  }
  return elements.map((element) => prepareElement(element, pageSize))
}

export const prepareElement = (element, pageSize) => {
  const position = [
    prepareUnit(element.position[0], pageSize.width),
    prepareUnit(element.position[1], pageSize.height),
  ];
  const size = [
    prepareUnit(element.size[0], pageSize.width),
    prepareUnit(element.size[1], pageSize.height),
  ];

  return {
    ...element,
    animation: element.animation || {},
    position,
    size,
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
