/**
 * 尺寸单位统一为像素
 * @param {string|number} value 被转换的数值
 * @param {number} base 基础值，宽度计算为window.innerWidth；高度计算为window.innerHeight
 */
const normalize = (value, base) => {
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

export const getKeyframes = (animation, target) => {
  const { position, size } = target;
  const width = normalize(size[0], window.innerWidth);
  const height = normalize(size[1], window.innerHeight);
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
      translateX: window.innerWidth + width,
      translateY: position[1],
    },
    slideInBottom: { // 下侧滑入
      translateX: position[0],
      translateY: window.innerHeight + height,
    },
    slideInLeftTop: { // 左上侧滑入
      translateX: -width,
      translateY: -height,
    },
    slideInRightTop: { // 右上侧滑入
      translateX: window.innerWidth + width,
      translateY: -height,
    },
    slideInLeftBottom: { // 左下侧滑入
      translateX: -width,
      translateY: window.innerHeight + height,
    },
    slideInRightBottom: { // 右下侧滑入
      translateX: window.innerWidth + width,
      translateY: window.innerHeight + height,
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
    width: size[0],
    height: size[1],
  })

  return keyframes;
}

export const getInitState = (attrs) => {
  if (!attrs) {
    return;
  }
  const { translateX = 0, translateY = 0, ...others } = attrs;
  return {
    ...others,
    transform: `translateX(${translateX}px) translateY(${translateY}px)`,
  };
}