/**
 * 入场动画
 */

/**
 * 
 * @param {string} type     动画类型 
 * @param {object} rect     元素位置大小
 * @param {object} parent   元素所在父容器的大小
 * @returns 
 */
export function keyframes(type, rect, parent) {
  if (type.startsWith('slide-in-')) {
    return slideIn(type, rect, parent);
  }
}

export function slideIn(type, rect, parent) {
  const initFrame = {
    width: rect.width,
    height: rect.height,
    translateX: rect.x,
    translateY: rect.y,
    duration: 0,
    opacity: 1
  };
  const finalFrame = {
    translateX: rect.x,
    translateY: rect.y,
  };

  switch(type) {
    case 'slide-in-left':
      initFrame.translateX = -rect.width;
      break;
    case 'slide-in-right':
      initFrame.translateX = parent.width;
      break;
    case 'slide-in-top':
      initFrame.translateY = -rect.height;
      break;
    case 'slide-in-bottom':
      initFrame.translateY = parent.height;
      break;
    case 'slide-in-leftTop':
      initFrame.translateX = -rect.width;
      initFrame.translateY = -rect.height;
      break;
    case 'slide-in-rightTop':
      initFrame.translateX = parent.width;
      initFrame.translateY = -rect.height;
      break;
    case 'slide-in-leftBottom':
      initFrame.translateY = -rect.height;
      initFrame.translateY = parent.height;
      break;
    case 'slide-in-rightBottom':
      initFrame.translateX = parent.width;
      initFrame.translateY = parent.height;
      break;
  }

  return [initFrame, finalFrame];
}